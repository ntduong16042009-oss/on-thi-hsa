import React, { useState } from 'react';
import { storage } from '../services/storage';
import { Exam } from '../types';
import { 
  Search, 
  Clock, 
  FileText, 
  CheckCircle, 
  PlayCircle, 
  Filter, 
  X,
  Award,
  AlertCircle
} from 'lucide-react';

interface LibraryProps {
  onNavigate: (view: string, examId?: string) => void;
  onStartExam: (exam: Exam) => void;
}

export const Library: React.FC<LibraryProps> = ({ onNavigate, onStartExam }) => {
  const [exams] = useState<Exam[]>(() => storage.getExams());
  const attempts = storage.getAttempts();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'completed' | 'uncompleted'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [selectedExamForModal, setSelectedExamForModal] = useState<Exam | null>(null);

  // Check which exams are completed
  const completedExamMap = new Map<string, { attemptsCount: number; maxScore: number }>();
  attempts.forEach(att => {
    const existing = completedExamMap.get(att.examId);
    if (!existing) {
      completedExamMap.set(att.examId, { attemptsCount: 1, maxScore: att.score });
    } else {
      completedExamMap.set(att.examId, {
        attemptsCount: existing.attemptsCount + 1,
        maxScore: Math.max(existing.maxScore, att.score)
      });
    }
  });

  // Filtered exams
  const filteredExams = exams.filter(exam => {
    // Search match
    const matchesSearch = 
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    // Difficulty filter
    if (difficultyFilter !== 'all' && exam.difficulty !== difficultyFilter) {
      return false;
    }

    // Status filter
    const isCompleted = completedExamMap.has(exam.id);
    if (statusFilter === 'completed' && !isCompleted) return false;
    if (statusFilter === 'uncompleted' && isCompleted) return false;
    if (statusFilter === 'new') {
      const isRecent = new Date(exam.createdAt).getTime() > new Date('2025-02-01').getTime();
      if (!isRecent) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Thư Viện Đề Thi HSA Ngữ Văn
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hệ thống ngân hàng đề thi chuẩn hóa bám sát cấu trúc khảo thí ĐHQG Hà Nội & ĐHQG TP.HCM
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm theo tên đề, mã đề (HSA-NV01)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Segmented Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Status filters */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              statusFilter === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Tất cả đề ({exams.length})
          </button>
          <button
            onClick={() => setStatusFilter('new')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              statusFilter === 'new'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Đề mới
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              statusFilter === 'completed'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Đã hoàn thành ({completedExamMap.size})
          </button>
          <button
            onClick={() => setStatusFilter('uncompleted')}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              statusFilter === 'uncompleted'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Chưa làm
          </button>
        </div>

        {/* Difficulty select */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">Mức độ:</span>
          <select
            value={difficultyFilter}
            onChange={e => setDifficultyFilter(e.target.value)}
            className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">Tất cả mức độ</option>
            <option value="Cơ bản">Cơ bản</option>
            <option value="Tiêu chuẩn HSA">Tiêu chuẩn HSA</option>
            <option value="Nâng cao">Nâng cao</option>
          </select>
        </div>

      </div>

      {/* Exam Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map(exam => {
          const completedData = completedExamMap.get(exam.id);
          const isDone = Boolean(completedData);

          return (
            <div
              key={exam.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm">
                      {exam.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{exam.difficulty}</span>
                  </div>

                  {isDone ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{completedData?.maxScore}/10</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">Chưa làm</span>
                  )}
                </div>

                {/* Exam Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exam.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {exam.description}
                </p>

                {/* Specs */}
                <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{exam.totalQuestions} câu hỏi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exam.durationMinutes} phút</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exam.tags.map(t => (
                    <span key={t} className="text-[10px] text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setSelectedExamForModal(exam)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={() => onStartExam(exam)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Bắt đầu thi</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredExams.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            Không tìm thấy đề thi phù hợp
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Vui lòng thử lại với từ khóa tìm kiếm hoặc điều chỉnh lại các bộ lọc trạng thái và độ khó.
          </p>
        </div>
      )}

      {/* Exam Details Modal */}
      {selectedExamForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-900 dark:text-slate-100 shadow-2xl relative space-y-5">
            
            <button
              onClick={() => setSelectedExamForModal(null)}
              className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                  {selectedExamForModal.code}
                </span>
                <span>·</span>
                <span>Độ khó: {selectedExamForModal.difficulty}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {selectedExamForModal.title}
              </h2>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedExamForModal.description}
            </p>

            {/* Exam structure specs */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5">Số lượng câu hỏi:</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {selectedExamForModal.totalQuestions} câu trắc nghiệm
                </span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Thời gian làm bài:</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {selectedExamForModal.durationMinutes} phút
                </span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Thang điểm chuẩn:</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  10.0 điểm
                </span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Quy chế thi:</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  Tự động nộp khi hết giờ
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-500">
              <div className="font-semibold text-slate-700 dark:text-slate-300">Quy định phòng thi:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Hệ thống tự động lưu đáp án sau mỗi lượt chọn.</li>
                <li>Bạn có thể đánh dấu các câu cần xem lại trước khi bấm nộp bài.</li>
                <li>Không tải lại trang để cố tình làm mới đồng hồ (thời gian được bảo lưu liên tục).</li>
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedExamForModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  const examToStart = selectedExamForModal;
                  setSelectedExamForModal(null);
                  onStartExam(examToStart);
                }}
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Bắt đầu thi ngay</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
