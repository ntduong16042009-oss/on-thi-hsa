import { User, ExamAttempt, ActiveExamSession, Question, Exam, UserStats, HSATopicId } from '../types';
import { ALL_QUESTIONS } from '../data/questions';
import { MOCK_EXAMS } from '../data/exams';
import { HSA_TOPICS } from '../data/topics';

const STORAGE_KEYS = {
  USER: 'hsa_current_user',
  ACTIVE_SESSION: 'hsa_active_session',
  ATTEMPTS: 'hsa_exam_attempts',
  QUESTIONS: 'hsa_custom_questions',
  EXAMS: 'hsa_custom_exams',
  BOOKMARKS: 'hsa_bookmarked_questions',
  THEME: 'hsa_theme_mode',
  REGISTERED_USERS: 'hsa_registered_users',
  VERSION: 'hsa_storage_version_v5'
};

export const PRESET_ACCOUNTS: User[] = [
  {
    id: 'user_loi_yenlang',
    name: 'Nguyễn Khắc Lợi',
    email: 'loi.nk.12a03@thptyenlang.edu.vn',
    role: 'student',
    targetScore: 95,
    school: 'Trường THPT Yên Lãng (Lớp 12A03)'
  },
  {
    id: 'user_huyen_yenlang',
    name: 'Nguyễn Thị Thu Huyền',
    email: 'huyen.ntt.12a03@thptyenlang.edu.vn',
    role: 'student',
    targetScore: 95,
    school: 'Trường THPT Yên Lãng (Lớp 12A03)'
  },
  {
    id: 'user_nga_teacher',
    name: 'Cô Võ Thị Mỹ Ngà',
    email: 'nga.vtm@thptyenlang.edu.vn',
    role: 'teacher',
    targetScore: 100,
    school: 'Trường THPT Yên Lãng (Giáo viên bộ môn Ngữ văn)'
  }
];

export const DEFAULT_USER: User = PRESET_ACCOUNTS[0];
export const TEACHER_USER: User = PRESET_ACCOUNTS[2];

// Refresh storage cache if version changed to ensure fresh 105 clean questions and 60-min exams
function syncStorageVersion() {
  if (typeof window === 'undefined') return;
  const currentVersion = localStorage.getItem(STORAGE_KEYS.VERSION);
  if (currentVersion !== 'v7_balanced_abcd_distribution') {
    localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
    localStorage.removeItem(STORAGE_KEYS.EXAMS);
    localStorage.setItem(STORAGE_KEYS.VERSION, 'v7_balanced_abcd_distribution');
  }
}
syncStorageVersion();

// Seed initial realistic history attempts for rich Dashboard charts
const INITIAL_SEED_ATTEMPTS: ExamAttempt[] = [
  {
    id: 'att-seed-01',
    userId: 'user_minhanh_2025',
    examId: 'exam-04',
    examTitle: 'Đề Rèn luyện Nền tảng: Ngữ pháp & Kiến thức Tiếng Việt',
    examCode: 'HSA-CB01',
    mode: 'mock-exam',
    completedAt: '2025-03-01T14:30:00.000Z',
    timeSpentSeconds: 1520,
    totalQuestions: 30,
    correctCount: 24,
    incorrectCount: 5,
    unansweredCount: 1,
    score: 8.0,
    maxScore: 10,
    accuracyRate: 80.0,
    answers: {
      Q001: 'A', Q002: 'B', Q003: 'C', Q004: 'B', Q005: 'B',
      Q006: 'A', Q007: 'A', Q008: 'A', Q009: 'A', Q010: 'A',
      Q011: 'A', Q012: 'A', Q013: 'A', Q014: 'A', Q015: 'A',
      Q016: 'A', Q017: 'B', Q018: 'B', Q019: 'B', Q020: 'A',
      Q021: 'B', Q022: 'B', Q023: 'A', Q024: 'A', Q025: 'C',
      Q026: 'A', Q027: 'B', Q028: 'A', Q029: 'A', Q030: 'B'
    },
    questionResults: [
      { questionId: 'Q004', isCorrect: true, correctAnswer: 'B', userAnswer: 'B', topicId: 'tieng-viet' },
      { questionId: 'Q007', isCorrect: true, correctAnswer: 'A', userAnswer: 'A', topicId: 'tu-vung-ngu-phap' },
      { questionId: 'Q021', isCorrect: false, correctAnswer: 'A', userAnswer: 'B', topicId: 'suy-luan-logic' },
      { questionId: 'Q025', isCorrect: false, correctAnswer: 'B', userAnswer: 'C', topicId: 'tieng-viet' },
      { questionId: 'Q027', isCorrect: false, correctAnswer: 'A', userAnswer: 'B', topicId: 'bien-phap-tu-tu' }
    ]
  },
  {
    id: 'att-seed-02',
    userId: 'user_minhanh_2025',
    examId: 'exam-01',
    examTitle: 'Đề thi thử HSA Chuẩn cấu trúc ĐHQGHN - Đề số 01',
    examCode: 'HSA-NV01',
    mode: 'mock-exam',
    completedAt: '2025-03-06T19:45:00.000Z',
    timeSpentSeconds: 2740,
    totalQuestions: 50,
    correctCount: 42,
    incorrectCount: 7,
    unansweredCount: 1,
    score: 8.4,
    maxScore: 10,
    accuracyRate: 84.0,
    answers: {
      Q001: 'A', Q002: 'B', Q003: 'C', Q004: 'B', Q005: 'B',
      Q006: 'A', Q007: 'A', Q008: 'A', Q009: 'A', Q010: 'A',
      Q011: 'A', Q012: 'A', Q013: 'A', Q014: 'A', Q015: 'A',
      Q016: 'A', Q017: 'B', Q018: 'B', Q019: 'B', Q020: 'A',
      Q021: 'A', Q022: 'B', Q023: 'A', Q024: 'A', Q025: 'B',
      Q026: 'A', Q027: 'A', Q028: 'A', Q029: 'A', Q030: 'A',
      Q031: 'A', Q032: 'A', Q033: 'A', Q034: 'A', Q035: 'B',
      Q036: 'A', Q037: 'A', Q038: 'A', Q039: 'A', Q040: 'A',
      Q041: 'A', Q042: 'A', Q043: 'B', Q044: 'A', Q045: 'A',
      Q046: 'A', Q047: 'A', Q048: 'A', Q049: 'A', Q050: 'A'
    },
    questionResults: [
      { questionId: 'Q001', isCorrect: true, correctAnswer: 'A', userAnswer: 'A', topicId: 'doc-hieu' },
      { questionId: 'Q003', isCorrect: true, correctAnswer: 'C', userAnswer: 'C', topicId: 'suy-luan-logic' },
      { questionId: 'Q035', isCorrect: false, correctAnswer: 'A', userAnswer: 'B', topicId: 'tu-vung-ngu-phap' }
    ]
  }
];

export const storage = {
  // USER
  getUser(): User | null {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  setUser(user: User | null): void {
    if (!user) {
      localStorage.removeItem(STORAGE_KEYS.USER);
    } else {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    }
  },

  getRegisteredAccounts(): User[] {
    const raw = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  },

  saveRegisteredAccount(account: User): void {
    const existing = this.getRegisteredAccounts();
    const filtered = existing.filter(a => a.id !== account.id && a.email.toLowerCase() !== account.email.toLowerCase());
    localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify([account, ...filtered]));
  },

  // QUESTIONS
  getQuestions(): Question[] {
    const raw = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(ALL_QUESTIONS));
      return ALL_QUESTIONS;
    }
    try {
      const parsed: Question[] = JSON.parse(raw);
      return parsed.length > 0 ? parsed : ALL_QUESTIONS;
    } catch {
      return ALL_QUESTIONS;
    }
  },

  saveQuestions(questions: Question[]): void {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  },

  addQuestion(question: Question): void {
    const current = this.getQuestions();
    const updated = [question, ...current];
    this.saveQuestions(updated);
  },

  updateQuestion(question: Question): void {
    const current = this.getQuestions();
    const updated = current.map(q => q.id === question.id ? question : q);
    this.saveQuestions(updated);
  },

  deleteQuestion(id: string): void {
    const current = this.getQuestions();
    const updated = current.filter(q => q.id !== id);
    this.saveQuestions(updated);
  },

  // EXAMS
  getExams(): Exam[] {
    const raw = localStorage.getItem(STORAGE_KEYS.EXAMS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(MOCK_EXAMS));
      return MOCK_EXAMS;
    }
    try {
      const parsed: Exam[] = JSON.parse(raw);
      return parsed.length > 0 ? parsed : MOCK_EXAMS;
    } catch {
      return MOCK_EXAMS;
    }
  },

  saveExams(exams: Exam[]): void {
    localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
  },

  addExam(exam: Exam): void {
    const current = this.getExams();
    this.saveExams([exam, ...current]);
  },

  updateExam(exam: Exam): void {
    const current = this.getExams();
    this.saveExams(current.map(e => e.id === exam.id ? exam : e));
  },

  deleteExam(id: string): void {
    const current = this.getExams();
    this.saveExams(current.filter(e => e.id !== id));
  },

  // ACTIVE EXAM SESSION (Auto-save)
  getActiveSession(): ActiveExamSession | null {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  saveActiveSession(session: ActiveExamSession): void {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
  },

  clearActiveSession(): void {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  },

  // ATTEMPTS / HISTORY
  getAttempts(): ExamAttempt[] {
    const raw = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(INITIAL_SEED_ATTEMPTS));
      return INITIAL_SEED_ATTEMPTS;
    }
    try {
      const parsed: ExamAttempt[] = JSON.parse(raw);
      return parsed.length > 0 ? parsed : INITIAL_SEED_ATTEMPTS;
    } catch {
      return INITIAL_SEED_ATTEMPTS;
    }
  },

  saveAttempt(attempt: ExamAttempt): void {
    const current = this.getAttempts();
    const updated = [attempt, ...current];
    localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
  },

  getAttemptById(attemptId: string): ExamAttempt | undefined {
    return this.getAttempts().find(a => a.id === attemptId);
  },

  // WRONG QUESTIONS (For Mode 3: Luyện câu sai)
  getAllWrongQuestionIds(): string[] {
    const attempts = this.getAttempts();
    const wrongSet = new Set<string>();

    attempts.forEach(att => {
      att.questionResults.forEach(qr => {
        if (!qr.isCorrect) {
          wrongSet.add(qr.questionId);
        }
      });
    });

    return Array.from(wrongSet);
  },

  // STATS COMPUTATION FOR DASHBOARD
  getUserStats(userId?: string): UserStats {
    const attempts = this.getAttempts();
    if (attempts.length === 0) {
      return {
        totalAttempts: 0,
        averageScore: 0,
        highestScore: 0,
        accuracyRate: 0,
        totalTimeSpentSeconds: 0,
        weakTopics: []
      };
    }

    const totalAttempts = attempts.length;
    const scores = attempts.map(a => a.score);
    const averageScore = Number((scores.reduce((sum, s) => sum + s, 0) / totalAttempts).toFixed(1));
    const highestScore = Math.max(...scores);
    const totalTimeSpentSeconds = attempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0);
    
    const totalCorrect = attempts.reduce((sum, a) => sum + a.correctCount, 0);
    const totalQuestions = attempts.reduce((sum, a) => sum + a.totalQuestions, 0);
    const accuracyRate = totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1)) : 0;

    // Weak topics calculation
    const topicMap: Record<HSATopicId, { total: number; incorrect: number }> = {} as any;
    HSA_TOPICS.forEach(t => {
      topicMap[t.id] = { total: 0, incorrect: 0 };
    });

    attempts.forEach(att => {
      att.questionResults.forEach(qr => {
        if (topicMap[qr.topicId]) {
          topicMap[qr.topicId].total += 1;
          if (!qr.isCorrect) {
            topicMap[qr.topicId].incorrect += 1;
          }
        }
      });
    });

    const weakTopics = HSA_TOPICS.map(t => {
      const stats = topicMap[t.id];
      const accuracy = stats.total > 0 ? Number((((stats.total - stats.incorrect) / stats.total) * 100).toFixed(1)) : 100;
      return {
        topicId: t.id,
        topicName: t.name,
        totalAnswered: stats.total,
        incorrectCount: stats.incorrect,
        accuracy
      };
    })
    .filter(t => t.totalAnswered > 0)
    .sort((a, b) => a.accuracy - b.accuracy); // Lowest accuracy first

    return {
      totalAttempts,
      averageScore,
      highestScore,
      accuracyRate,
      totalTimeSpentSeconds,
      weakTopics
    };
  }
};
