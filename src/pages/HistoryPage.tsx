import React, { useState } from 'react';
import { storage } from '../services/storage';
import { ExamAttempt } from '../types';
import { ScoreLineChart } from '../components/Charts/ScoreLineChart';
import { TopicBarChart } from '../components/Charts/TopicBarChart';
import { AccuracyDonut } from '../components/Charts/AccuracyDonut';
import { 
  Calendar, 
  Clock, 
  Award, 
  Search, 
  ChevronRight, 
  CheckCircle, 
  XCircle,
  FileText
} from 'lucide-react';

interface HistoryPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  const attempts = storage.getAttempts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAttempts = attempts.filter(att => {
    return att.examTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
           att.examCode.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const totalCorrect = attempts.reduce((sum, a) => sum + a.correctCount, 0);
  const totalIncorrect = attempts.reduce((sum, a) => sum + a.incorrectCount, 0);
  const totalUnanswered = attempts.reduce((sum, a) => sum + a.unansweredCount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lịch Sử Thi & Thống Kê Tiến Bộ
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Toàn bộ nhật ký các lần làm bài, kết quả chấm thi và sự tiến bộ năng lực qua thời gian
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm theo tên bài thi..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 3 Real History Charts Grid: Line (Score) + Bar (Topics) + Donut (Accuracy) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Line chart */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Xu hướng điểm số qua các lần thi
          </h3>
          <ScoreLineChart attempts={attempts} />
        </div>

        {/* Donut chart */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3 flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Tỷ lệ đúng - sai tổng quan
          </h3>
          <AccuracyDonut 
            correct={totalCorrect} 
            incorrect={totalIncorrect} 
            unanswered={totalUnanswered} 
          />
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex justify-between">
            <span>Tổng câu đã làm:</span>
            <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">
              {totalCorrect + totalIncorrect + totalUnanswered} câu
            </span>
          </div>
        </div>

        {/* Topic Competency Bar Chart across all attempts */}
        <div className="lg:col-span-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Độ chính xác chi tiết theo từng chuyên đề năng lực HSA
          </h3>
          <TopicBarChart attempts={attempts} />
        </div>

      </div>

      {/* Attempts Table/List */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs space-y-0">
        
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Danh sách bài thi ({filteredAttempts.length})
          </h3>
          <span className="text-xs text-slate-500">
            Bấm vào bất kỳ bài thi nào để xem phân tích lỗi sai chi tiết
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filteredAttempts.map(att => {
            const date = new Date(att.completedAt);
            const dateStr = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
            const timeSpentMins = Math.floor(att.timeSpentSeconds / 60);
            const timeSpentSecs = att.timeSpentSeconds % 60;

            return (
              <div
                key={att.id}
                onClick={() => onNavigate('result', att.id)}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                      {att.examCode}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{dateStr}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{timeSpentMins}m {timeSpentSecs}s</span>
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {att.examTitle}
                  </h4>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      ✓ Đúng {att.correctCount}/{att.totalQuestions}
                    </span>
                    <span className="text-rose-600 dark:text-rose-400 font-medium">
                      ✕ Sai {att.incorrectCount}
                    </span>
                    <span>Độ chính xác: {att.accuracyRate}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-black text-blue-600 dark:text-blue-400 tabular-nums">
                      {att.score} <span className="text-xs text-slate-400 font-normal">/ 10</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Xem phân tích</span>
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredAttempts.length === 0 && (
          <div className="p-12 text-center text-sm text-slate-500">
            Không tìm thấy bài thi nào phù hợp.
          </div>
        )}

      </div>

    </div>
  );
};
