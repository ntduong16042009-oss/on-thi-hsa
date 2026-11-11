import { Exam } from '../types';
import { ALL_QUESTIONS } from './questions';

// Helper to pick questions by range or topic
const getIds = (start: number, count: number): string[] => {
  return ALL_QUESTIONS.slice(start, start + count).map(q => q.id);
};

export const MOCK_EXAMS: Exam[] = [
  {
    id: 'exam-01',
    code: 'HSA-NV01',
    title: 'Đề thi thử HSA Chuẩn cấu trúc ĐHQGHN - Đề số 01',
    description: 'Bộ đề thi chuẩn hóa mô phỏng 100% định dạng đề thi Đánh giá năng lực phần Tư duy định tính (Ngữ văn - Ngôn ngữ), thời gian làm bài chuẩn 60 phút gồm 50 câu hỏi bao quát 10 nhóm năng lực đọc hiểu và tiếng Việt.',
    questionIds: getIds(0, 50),
    durationMinutes: 60,
    difficulty: 'Tiêu chuẩn HSA',
    year: 2025,
    totalQuestions: 50,
    tags: ['Chuẩn HSA 60 phút', 'Tư duy định tính', 'ĐHQGHN', 'Đề chính thức'],
    createdAt: '2025-01-15'
  },
  {
    id: 'exam-02',
    code: 'HSA-NV02',
    title: 'Đề thi thử HSA Chuẩn cấu trúc ĐHQGHN - Đề số 02',
    description: 'Tập trung chuyên sâu vào kỹ năng phân tích ngữ liệu nhật dụng, văn bản khoa học công nghệ đương đại kết hợp biện pháp tu từ nâng cao trong thời lượng chuẩn 60 phút.',
    questionIds: getIds(25, 50),
    durationMinutes: 60,
    difficulty: 'Tiêu chuẩn HSA',
    year: 2025,
    totalQuestions: 50,
    tags: ['Đề số 02', 'Chuẩn HSA 60 phút', 'Đọc hiểu báo chí', 'Biện pháp tu từ'],
    createdAt: '2025-02-10'
  },
  {
    id: 'exam-03',
    code: 'HSA-ADV01',
    title: 'Đề Chinh phục điểm 9+ HSA: Đọc hiểu nâng cao & Suy luận logic',
    description: 'Bộ đề phân hóa cao dành cho học sinh mục tiêu các trường Đại học Top đầu (Kinh tế Quốc dân, Ngoại thương, Bách Khoa). Đòi hỏi khả năng đối chiếu văn bản triết học và phản biện ngụy biện logic trong 60 phút.',
    questionIds: getIds(50, 50),
    durationMinutes: 60,
    difficulty: 'Nâng cao',
    year: 2025,
    totalQuestions: 50,
    tags: ['Mục tiêu 9+', 'Chuẩn 60 phút', 'Phân loại cao', 'Suy luận logic'],
    createdAt: '2025-02-28'
  },
  {
    id: 'exam-04',
    code: 'HSA-CB01',
    title: 'Đề Rèn luyện Nền tảng: Ngữ pháp & Kiến thức Tiếng Việt',
    description: 'Bộ đề tập trung củng cố nền tảng ngữ pháp câu, phân biệt từ Hán Việt, lỗi sai chính tả và các phong cách ngôn ngữ chức năng thường gặp.',
    questionIds: getIds(3, 30),
    durationMinutes: 40,
    difficulty: 'Cơ bản',
    year: 2025,
    totalQuestions: 30,
    tags: ['Nền tảng', 'Chống mất điểm', 'Tiếng Việt', 'Ngữ pháp'],
    createdAt: '2025-03-05'
  },
  {
    id: 'exam-05',
    code: 'HSA-SP01',
    title: 'Đề Tổng ôn Đột phá: Văn học Hiện đại & Kỹ năng Đọc nhanh',
    description: 'Tổng hợp các câu hỏi văn học hiện thực phê phán, thơ kháng chiến và ngữ liệu trích đoạn đặc sắc thử thách tốc độ đọc hiểu định lượng chuẩn 60 phút 50 câu.',
    questionIds: getIds(10, 50),
    durationMinutes: 60,
    difficulty: 'Tiêu chuẩn HSA',
    year: 2025,
    totalQuestions: 50,
    tags: ['Tổng ôn 60 phút', 'Văn học hiện đại', 'Tốc độ đọc', 'Thơ kháng chiến'],
    createdAt: '2025-03-12'
  }
];

export function getExamById(id: string): Exam | undefined {
  return MOCK_EXAMS.find(e => e.id === id);
}
