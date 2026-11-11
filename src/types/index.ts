export type Difficulty = 'Cơ bản' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';

export type HSATopicId = 
  | 'doc-hieu'
  | 'tieng-viet'
  | 'tu-vung-ngu-phap'
  | 'bien-phap-tu-tu'
  | 'phong-cach-ngon-ngu'
  | 'kien-thuc-van-hoc'
  | 'phan-tich-van-ban'
  | 'suy-luan-logic'
  | 'danh-gia-thuc-tien'
  | 'doc-hieu-nang-cao';

export interface TopicInfo {
  id: HSATopicId;
  name: string;
  shortName: string;
  description: string;
  weightPercent: number; // Tỷ lệ xuất hiện ước tính trong cấu trúc đề HSA
}

export interface Question {
  id: string;
  topicId: HSATopicId;
  difficulty: Difficulty;
  passage?: {
    title?: string;
    author?: string;
    source?: string;
    content: string;
  };
  prompt: string; // Nội dung câu hỏi
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Lời giải thích chi tiết
  keyTakeaway: string; // Kiến thức cần ghi nhớ / Mẹo xử lý dạng bài
}

export interface Exam {
  id: string;
  code: string; // e.g. "HSA-NV01"
  title: string;
  description: string;
  questionIds: string[];
  durationMinutes: number; // e.g. 50 minutes for 50 questions
  difficulty: 'Tiêu chuẩn HSA' | 'Cơ bản' | 'Nâng cao';
  year: number;
  totalQuestions: number;
  tags: string[];
  createdAt: string;
}

export type PracticeMode = 
  | 'mock-exam'       // Chế độ 1: Thi thử (Có đếm ngược, chấm điểm cuối)
  | 'practice'        // Chế độ 2: Luyện tập (Làm từng câu, xem lời giải ngay)
  | 'wrong-drill'     // Chế độ 3: Luyện câu sai (Tổng hợp từ lịch sử)
  | 'topic-drill';    // Chế độ 4: Luyện theo chủ đề

export interface ActiveExamSession {
  examId: string;
  examTitle: string;
  examCode: string;
  mode: PracticeMode;
  questionIds: string[];
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  flaggedQuestionIds: string[];
  currentQuestionIndex: number;
  startedAt: number; // timestamp
  totalSeconds: number;
  remainingSeconds: number;
  isCompleted: boolean;
}

export interface ExamAttempt {
  id: string;
  userId: string;
  examId: string;
  examTitle: string;
  examCode: string;
  mode: PracticeMode;
  completedAt: string;
  timeSpentSeconds: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number; // Scale out of 10 or 50
  maxScore: number;
  accuracyRate: number; // 0 - 100%
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  questionResults: {
    questionId: string;
    userAnswer?: 'A' | 'B' | 'C' | 'D';
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    isCorrect: boolean;
    topicId: HSATopicId;
  }[];
}

export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  targetScore?: number;
  school?: string;
}

export interface UserStats {
  totalAttempts: number;
  averageScore: number;
  highestScore: number;
  accuracyRate: number;
  totalTimeSpentSeconds: number;
  weakTopics: {
    topicId: HSATopicId;
    topicName: string;
    totalAnswered: number;
    incorrectCount: number;
    accuracy: number;
  }[];
}
