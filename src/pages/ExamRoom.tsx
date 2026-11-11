import React, { useState } from 'react';
import { useExam } from '../context/ExamContext';
import { PassageViewer } from '../components/PassageViewer';
import { QuestionCard } from '../components/QuestionCard';
import { QuestionPalette } from '../components/QuestionPalette';
import { ExamTimer } from '../components/ExamTimer';
import { ConfirmModal } from '../components/ConfirmModal';
import { 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Bookmark, 
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

interface ExamRoomProps {
  onNavigate: (view: string, param?: string) => void;
}

export const ExamRoom: React.FC<ExamRoomProps> = ({ onNavigate }) => {
  const {
    activeSession,
    currentQuestion,
    questions,
    currentQuestionIndex,
    timeRemaining,
    timeWarning,
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
    getUnansweredCount
  } = useExam();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  if (!activeSession || questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Chưa có bài thi nào đang diễn ra
        </h2>
        <p className="text-xs text-slate-500">
          Hãy chọn một đề thi từ thư viện hoặc một chủ đề luyện tập để bắt đầu.
        </p>
        <button
          onClick={() => onNavigate('library')}
          className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
        >
          Đến Thư viện đề thi
        </button>
      </div>
    );
  }

  const answeredCount = getAnsweredCount();
  const flaggedCount = getFlaggedCount();
  const unansweredCount = getUnansweredCount();

  const formatRemainingTime = () => {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleConfirmSubmit = () => {
    setIsConfirmModalOpen(false);
    const attempt = submitExam();
    if (attempt) {
      onNavigate('result', attempt.id);
    }
  };

  const isCurrentFlagged = currentQuestion ? activeSession.flaggedQuestionIds.includes(currentQuestion.id) : false;
  const currentUserAnswer = currentQuestion ? activeSession.answers[currentQuestion.id] : undefined;
  const hasPassage = Boolean(currentQuestion?.passage);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-slate-50 dark:bg-slate-950">
      
      {/* 6.A. Thanh thông tin đầu phòng thi (Sticky Exam Header) */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8 py-3 transition-colors shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Exam Title & Code */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn tạm dừng bài thi và quay lại danh sách đề? Tiến trình bài thi vẫn được lưu tự động.')) {
                  onNavigate('library');
                }
              }}
              title="Quay lại danh sách đề (bài làm vẫn lưu)"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{activeSession.examCode}</span>
                <span>·</span>
                <span className="capitalize">
                  {activeSession.mode === 'mock-exam' ? 'Thi Thử Chuẩn Hóa' : activeSession.mode === 'practice' ? 'Luyện Tập Trực Tiếp' : 'Rèn Luyện'}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate max-w-md">
                {activeSession.examTitle}
              </h1>
            </div>
          </div>

          {/* Timer and Submit Action */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            {activeSession.mode === 'mock-exam' && (
              <ExamTimer 
                remainingSeconds={timeRemaining} 
                warningState={timeWarning} 
              />
            )}

            <button
              onClick={() => setIsConfirmModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>NỘP BÀI</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Workspace Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Question + Passage Container (col-span-8 or 9) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* If question has a passage, split into side-by-side or stacked container */}
            {hasPassage && currentQuestion?.passage && (
              <div className="h-80 md:h-96">
                <PassageViewer passage={currentQuestion.passage} />
              </div>
            )}

            {/* Current Question Stem and Options A, B, C, D */}
            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                userAnswer={currentUserAnswer}
                isFlagged={isCurrentFlagged}
                mode={activeSession.mode}
                onSelectAnswer={selectAnswer}
                onClearAnswer={clearAnswer}
                onToggleFlag={toggleFlagCurrentQuestion}
              />
            )}

            {/* 6.D. Điều khiển câu trước / câu sau / nộp bài */}
            <div className="flex items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
              <button
                onClick={goToPrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>CÂU TRƯỚC</span>
              </button>

              <div className="text-xs font-medium text-slate-500 tabular-nums">
                Câu {currentQuestionIndex + 1} / {questions.length}
              </div>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={goToNextQuestion}
                  className="flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <span>CÂU TIẾP THEO</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsConfirmModalOpen(true)}
                  className="flex items-center gap-1 px-5 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>HOÀN THÀNH & NỘP BÀI</span>
                </button>
              )}
            </div>

          </div>

          {/* 6.C. Bảng điều hướng số câu hỏi (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <QuestionPalette
              totalQuestions={questions.length}
              currentIndex={currentQuestionIndex}
              questionIds={activeSession.questionIds}
              answers={activeSession.answers}
              flaggedIds={activeSession.flaggedQuestionIds}
              onSelectIndex={goToQuestion}
            />

            {/* Quick status summary card */}
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>Số câu đã chọn:</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 tabular-nums">{answeredCount} câu</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>Số câu chưa chọn:</span>
                <span className="font-bold text-slate-500 tabular-nums">{unansweredCount} câu</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>Số câu đánh dấu xem lại:</span>
                <span className="font-bold text-amber-500 tabular-nums">{flaggedCount} câu</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmSubmit}
        totalQuestions={questions.length}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        flaggedCount={flaggedCount}
        timeRemainingText={formatRemainingTime()}
      />

    </div>
  );
};
