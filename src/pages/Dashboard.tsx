import React from 'react';
import { useAuth } from '../context/AuthContext';
import { storage } from '../services/storage';
import { ScoreLineChart } from '../components/Charts/ScoreLineChart';
import { TopicBarChart } from '../components/Charts/TopicBarChart';
import { AccuracyDonut } from '../components/Charts/AccuracyDonut';
import { MOCK_EXAMS } from '../data/exams';
import { 
  PlayCircle, 
  Award, 
  Clock, 
  Target, 
  TrendingUp, 
  AlertCircle, 
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: string, param?: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const stats = storage.getUserStats(user?.id);
  const attempts = storage.getAttempts();
  const wrongQuestionCount = storage.getAllWrongQuestionIds().length;

  const totalMinutes = Math.round(stats.totalTimeSpentSeconds / 60);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Greeting & Primary CTA Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Trung tâm Điều khiển Học tập Cá nhân</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Xin chào, {user?.name || 'Thí sinh HSA'}!
            </h1>
            <p className="text-sm text-blue-100 max-w-xl">
              Mục tiêu điểm số: <span className="font-bold text-amber-300">{user?.targetScore || 90}/100</span> · Trường mục tiêu: {user?.school || 'Đại học Quốc gia Hà Nội'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('library')}
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-blue-600" />
              <span>BẮT ĐẦU THI THỬ</span>
            </button>
            <button
              onClick={() => onNavigate('practice')}
              className="flex items-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-blue-600/60 hover:bg-blue-600/80 border border-blue-400/40 rounded-xl transition-all cursor-pointer"
            >
              <span>Luyện theo chủ đề</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Cards Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        
        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Số bài thi</span>
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
            {stats.totalAttempts}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Đã hoàn thành</p>
        </div>

        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Điểm trung bình</span>
            <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
            {stats.averageScore} <span className="text-xs text-slate-400 font-normal">/ 10.0</span>
          </div>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">Đạt chuẩn năng lực</p>
        </div>

        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Điểm cao nhất</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400 tabular-nums">
            {stats.highestScore} <span className="text-xs text-slate-400 font-normal">/ 10.0</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Kỷ lục bài thi</p>
        </div>

        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Tỷ lệ chính xác</span>
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
            {stats.accuracyRate}%
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Trung bình toàn bộ câu</p>
        </div>

        <div className="col-span-2 sm:col-span-1 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Thời gian luyện</span>
            <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
            {totalMinutes} <span className="text-xs text-slate-400 font-normal">phút</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Rèn luyện tập trung</p>
        </div>

      </div>

      {/* Charts Section: Progression Line + Topic Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Score Progression Line Chart */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Biểu đồ tiến bộ điểm số
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Theo dõi kết quả điểm thi qua từng lần làm bài
              </p>
            </div>
          </div>
          <ScoreLineChart attempts={attempts} />
        </div>

        {/* Topic Competency Bar Chart */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Độ chính xác theo chuyên đề
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tỷ lệ câu làm đúng trên 10 nhóm năng lực HSA
              </p>
            </div>
          </div>
          <TopicBarChart attempts={attempts} />
        </div>

      </div>

      {/* Weak Topics Callout & Recent History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Weak Topics Column */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Chủ đề cần cải thiện
              </h3>
            </div>
            {wrongQuestionCount > 0 && (
              <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                {wrongQuestionCount} câu sai đang lưu
              </span>
            )}
          </div>

          <div className="space-y-3">
            {stats.weakTopics.length > 0 ? (
              stats.weakTopics.slice(0, 3).map(wt => (
                <div
                  key={wt.topicId}
                  className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {wt.topicName}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Đã làm {wt.totalAnswered} câu · Sai {wt.incorrectCount} câu
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                      {wt.accuracy}% đúng
                    </span>
                    <button
                      onClick={() => onNavigate('practice', wt.topicId)}
                      className="px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-100 rounded-md transition-colors cursor-pointer"
                    >
                      Luyện ngay
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 py-4 text-center">
                Bạn chưa làm bài thi nào để phân tích chủ đề yếu.
              </p>
            )}
          </div>

          {wrongQuestionCount > 0 && (
            <div className="pt-2">
              <button
                onClick={() => onNavigate('practice', 'wrong-mode')}
                className="w-full flex items-center justify-center gap-2 p-3 text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 rounded-lg hover:bg-amber-100 transition-colors cursor-pointer"
              >
                <span>Luyện lại {wrongQuestionCount} câu đã làm sai</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Recent Attempts History */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Lịch sử làm bài gần đây
            </h3>
            <button
              onClick={() => onNavigate('history')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Xem tất cả ({attempts.length})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {attempts.slice(0, 4).map(att => {
              const date = new Date(att.completedAt);
              const dateStr = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
              
              return (
                <div
                  key={att.id}
                  onClick={() => onNavigate('result', att.id)}
                  className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 px-2 rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                        {att.examCode}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500 dark:text-slate-400">{dateStr}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {att.examTitle}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <div className="text-base font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                        {att.score} / 10
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Đúng {att.correctCount}/{att.totalQuestions} ({att.accuracyRate}%)
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Recommended Exams Carousel/Row */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Đề thi đề xuất cho bạn
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Dựa trên ma trận đề thi HSA 2025 và tiến độ học tập hiện tại
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MOCK_EXAMS.slice(0, 3).map(exam => (
            <div
              key={exam.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{exam.code}</span>
                  <span>{exam.difficulty}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                  {exam.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{exam.totalQuestions} câu</span>
                  <span>·</span>
                  <span>{exam.durationMinutes} phút</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigate('exam-detail', exam.id)}
                  className="w-full py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                >
                  Bắt đầu làm bài
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
