import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ActiveExamSession, ExamAttempt, PracticeMode, Question } from '../types';
import { storage } from '../services/storage';
import { useAuth } from './AuthContext';
import confetti from 'canvas-confetti';

interface ExamContextType {
  activeSession: ActiveExamSession | null;
  currentQuestion: Question | null;
  questions: Question[];
  currentQuestionIndex: number;
  timeRemaining: number;
  isTimerRunning: boolean;
  timeWarning: 'normal' | 'ten-min' | 'five-min';
  startExam: (examId: string, examTitle: string, examCode: string, questionIds: string[], durationMinutes: number, mode?: PracticeMode) => void;
  selectAnswer: (key: 'A' | 'B' | 'C' | 'D') => void;
  clearAnswer: () => void;
  toggleFlagCurrentQuestion: () => void;
  goToQuestion: (index: number) => void;
  goToNextQuestion: () => void;
  goToPrevQuestion: () => void;
  submitExam: () => ExamAttempt | null;
  abandonExam: () => void;
  getAnsweredCount: () => number;
  getFlaggedCount: () => number;
  getUnansweredCount: () => number;
  lastCompletedAttempt: ExamAttempt | null;
  setLastCompletedAttempt: (att: ExamAttempt | null) => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [allBankQuestions, setAllBankQuestions] = useState<Question[]>(() => storage.getQuestions());
  const [activeSession, setActiveSession] = useState<ActiveExamSession | null>(() => storage.getActiveSession());
  const [lastCompletedAttempt, setLastCompletedAttempt] = useState<ExamAttempt | null>(null);

  // Timer reference
  const timerRef = useRef<number | null>(null);

  // Sync questions from storage periodically
  useEffect(() => {
    setAllBankQuestions(storage.getQuestions());
  }, [activeSession?.examId]);

  // Recover active session questions
  const currentExamQuestions: Question[] = React.useMemo(() => {
    if (!activeSession) return [];
    const questionMap = new Map(allBankQuestions.map(q => [q.id, q]));
    return activeSession.questionIds
      .map(id => questionMap.get(id))
      .filter((q): q is Question => q !== undefined);
  }, [activeSession, allBankQuestions]);

  const currentQuestionIndex = activeSession?.currentQuestionIndex ?? 0;
  const currentQuestion = currentExamQuestions[currentQuestionIndex] ?? null;
  const timeRemaining = activeSession?.remainingSeconds ?? 0;

  // Warning state
  const timeWarning: 'normal' | 'ten-min' | 'five-min' = React.useMemo(() => {
    if (!activeSession || activeSession.mode !== 'mock-exam') return 'normal';
    if (activeSession.remainingSeconds <= 300) return 'five-min';
    if (activeSession.remainingSeconds <= 600) return 'ten-min';
    return 'normal';
  }, [activeSession?.remainingSeconds, activeSession?.mode]);

  // Timer Tick effect
  useEffect(() => {
    if (!activeSession || activeSession.isCompleted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    // In mock exam mode, run the countdown timer
    if (activeSession.mode === 'mock-exam') {
      timerRef.current = window.setInterval(() => {
        setActiveSession(prev => {
          if (!prev || prev.isCompleted) return prev;
          if (prev.remainingSeconds <= 1) {
            // Auto submit when time runs out
            if (timerRef.current) clearInterval(timerRef.current);
            setTimeout(() => {
              autoSubmitOnTimeout();
            }, 100);
            return {
              ...prev,
              remainingSeconds: 0
            };
          }
          const updated = {
            ...prev,
            remainingSeconds: prev.remainingSeconds - 1
          };
          storage.saveActiveSession(updated);
          return updated;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSession?.examId, activeSession?.isCompleted, activeSession?.mode]);

  const autoSubmitOnTimeout = () => {
    submitExam();
  };

  const startExam = (
    examId: string,
    examTitle: string,
    examCode: string,
    questionIds: string[],
    durationMinutes: number,
    mode: PracticeMode = 'mock-exam'
  ) => {
    const totalSeconds = durationMinutes * 60;
    const newSession: ActiveExamSession = {
      examId,
      examTitle,
      examCode,
      mode,
      questionIds,
      answers: {},
      flaggedQuestionIds: [],
      currentQuestionIndex: 0,
      startedAt: Date.now(),
      totalSeconds,
      remainingSeconds: totalSeconds,
      isCompleted: false
    };

    setActiveSession(newSession);
    storage.saveActiveSession(newSession);
  };

  const selectAnswer = (key: 'A' | 'B' | 'C' | 'D') => {
    if (!activeSession || !currentQuestion) return;
    const currentQId = currentQuestion.id;

    setActiveSession(prev => {
      if (!prev) return null;
      const updatedAnswers = {
        ...prev.answers,
        [currentQId]: key
      };
      const updatedSession = {
        ...prev,
        answers: updatedAnswers
      };
      storage.saveActiveSession(updatedSession);
      return updatedSession;
    });
  };

  const clearAnswer = () => {
    if (!activeSession || !currentQuestion) return;
    const currentQId = currentQuestion.id;

    setActiveSession(prev => {
      if (!prev) return null;
      const updatedAnswers = { ...prev.answers };
      delete updatedAnswers[currentQId];
      const updatedSession = {
        ...prev,
        answers: updatedAnswers
      };
      storage.saveActiveSession(updatedSession);
      return updatedSession;
    });
  };

  const toggleFlagCurrentQuestion = () => {
    if (!activeSession || !currentQuestion) return;
    const qId = currentQuestion.id;

    setActiveSession(prev => {
      if (!prev) return null;
      const isFlagged = prev.flaggedQuestionIds.includes(qId);
      const updatedFlags = isFlagged
        ? prev.flaggedQuestionIds.filter(id => id !== qId)
        : [...prev.flaggedQuestionIds, qId];

      const updatedSession = {
        ...prev,
        flaggedQuestionIds: updatedFlags
      };
      storage.saveActiveSession(updatedSession);
      return updatedSession;
    });
  };

  const goToQuestion = (index: number) => {
    if (!activeSession) return;
    if (index < 0 || index >= currentExamQuestions.length) return;

    setActiveSession(prev => {
      if (!prev) return null;
      const updated = { ...prev, currentQuestionIndex: index };
      storage.saveActiveSession(updated);
      return updated;
    });
  };

  const goToNextQuestion = () => {
    if (!activeSession) return;
    if (currentQuestionIndex < currentExamQuestions.length - 1) {
      goToQuestion(currentQuestionIndex + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (!activeSession) return;
    if (currentQuestionIndex > 0) {
      goToQuestion(currentQuestionIndex - 1);
    }
  };

  const getAnsweredCount = () => {
    if (!activeSession) return 0;
    return Object.keys(activeSession.answers).length;
  };

  const getFlaggedCount = () => {
    return activeSession?.flaggedQuestionIds.length ?? 0;
  };

  const getUnansweredCount = () => {
    if (!activeSession) return 0;
    return currentExamQuestions.length - getAnsweredCount();
  };

  const submitExam = (): ExamAttempt | null => {
    if (!activeSession) return null;

    if (timerRef.current) clearInterval(timerRef.current);

    const timeSpentSeconds = Math.max(1, activeSession.totalSeconds - activeSession.remainingSeconds);
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const questionResults = currentExamQuestions.map(q => {
      const userAnswer = activeSession.answers[q.id];
      const isAnswered = userAnswer !== undefined;
      const isCorrect = isAnswered && userAnswer === q.correctAnswer;

      if (!isAnswered) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      return {
        questionId: q.id,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        topicId: q.topicId
      };
    });

    const totalQuestions = currentExamQuestions.length;
    const accuracyRate = totalQuestions > 0 ? Number(((correctCount / totalQuestions) * 100).toFixed(1)) : 0;
    // HSA grading scale: standard 10.0 scale
    const score = totalQuestions > 0 ? Number(((correctCount / totalQuestions) * 10).toFixed(2)) : 0;

    const attempt: ExamAttempt = {
      id: `att_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      userId: user?.id || 'guest',
      examId: activeSession.examId,
      examTitle: activeSession.examTitle,
      examCode: activeSession.examCode,
      mode: activeSession.mode,
      completedAt: new Date().toISOString(),
      timeSpentSeconds,
      totalQuestions,
      correctCount,
      incorrectCount,
      unansweredCount,
      score,
      maxScore: 10,
      accuracyRate,
      answers: { ...activeSession.answers },
      questionResults
    };

    // Save to storage
    storage.saveAttempt(attempt);
    storage.clearActiveSession();

    setActiveSession(null);
    setLastCompletedAttempt(attempt);

    // Fire celebratory confetti if high accuracy (>= 80%)
    if (accuracyRate >= 80) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // silent fail if confetti not supported
      }
    }

    return attempt;
  };

  const abandonExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    storage.clearActiveSession();
    setActiveSession(null);
  };

  return (
    <ExamContext.Provider
      value={{
        activeSession,
        currentQuestion,
        questions: currentExamQuestions,
        currentQuestionIndex,
        timeRemaining,
        isTimerRunning: activeSession?.mode === 'mock-exam',
        timeWarning,
        startExam,
        selectAnswer,
        clearAnswer,
        toggleFlagCurrentQuestion,
        goToQuestion,
        goToNextQuestion,
        goToPrevQuestion,
        submitExam,
        abandonExam,
        getAnsweredCount,
        getFlaggedCount,
        getUnansweredCount,
        lastCompletedAttempt,
        setLastCompletedAttempt
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => {
  const ctx = useContext(ExamContext);
  if (!ctx) throw new Error('useExam must be used within an ExamProvider');
  return ctx;
};
