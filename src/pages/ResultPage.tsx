import React, { useState } from 'react';
import { storage } from '../services/storage';
import { ExamAttempt, Question } from '../types';
import { AccuracyDonut } from '../components/Charts/AccuracyDonut';
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Clock, 
  Award, 
  RotateCcw, 
  PlayCircle, 
  LayoutDashboard,
  Check,
  X,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { getTopicById } from '../data/topics';

interface ResultPageProps {
  attemptId?: string;
  onNavigate: (view: string, param?: string) => void;
  onPracticeWrongQuestions: (questionIds: string[]) => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  attemptId,
  onNavigate,
  onPracticeWrongQuestions
}) => {
  const attempts = storage.getAttempts();
  const attempt = attemptId 
    ? storage.getAttemptById(attemptId) || attempts[0]
    : attempts[0];

  const allQuestions = storage.getQuestions();
  const questionMap = new Map<string, Question>(allQuestions.map(q => [q.id, q]));

  // 10.B. Bộ lọc câu hỏi: Default is "wrong" (Câu trả lời sai) as explicitly requested!
  const [filter, setFilter] = useState<'wrong' | 'all' | 'correct' | 'unanswered'>('wrong');

  if (!attempt) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500">Không tìm thấy thông tin kết quả bài thi.</p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
        >
          Quay về Dashboard
        </button>
      </div>
    );
  }

  const timeSpentMins = Math.floor(attempt.timeSpentSeconds / 60);
  const timeSpentSecs = attempt.timeSpentSeconds % 60;
  const timeFormatted = `${timeSpentMins} phút ${timeSpentSecs} giây`;

  // Filter question results
  const filteredQuestionResults = attempt.questionResults.filter(qr => {
    if (filter === 'all') return true;
    if (filter === 'correct') return qr.isCorrect;
    if (filter === 'wrong') return !qr.isCorrect && qr.userAnswer !== undefined;
    if (filter === 'unanswered') return qr.userAnswer === undefined;
    return true;
  });

  const wrongQuestionIds = attempt.questionResults
    .filter(qr => !qr.isCorrect)
    .map(qr => qr.questionId);

  // Competency evaluation feedback based on score
  let evaluationSummary = {
    badge: 'Đạt kết quả xuất sắc',
    color: 'text-emerald-600 dark:text-emerald-400',
    description: 'Bạn thể hiện năng lực đọc hiểu và tư duy ngôn ngữ rất vững vàng, tốc độ xử lý câu hỏi tốt và ít mắc bẫy ngữ nghĩa. Hãy duy trì phong độ và rèn luyện các dạng bài nâng cao.'
  };

  if (attempt.score < 5.0) {
    evaluationSummary = {
      badge: 'Cần củng cố kiến thức nền tảng',
      color: 'text-rose-600 dark:text-rose-400',
      description: 'Bạn còn gặp khó khăn ở các câu hỏi ngữ pháp tiếng Việt, từ Hán - Việt và xác định biện pháp tu từ. Hãy luyện tập lại các câu sai và ôn theo từng chuyên đề.'
    };
  } else if (attempt.score < 8.0) {
    evaluationSummary = {
      badge: 'Năng lực đạt mức khá tốt',
      color: 'text-blue-600 dark:text-blue-400',
      description: 'Bạn nắm chắc kiến thức cơ bản nhưng còn mất điểm ở các câu hỏi suy luận logic, phân tích ngầm và câu hỏi vận dụng cao. Hãy tập trung luyện các câu sai bên dưới.'
    };
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 10. Phần đầu: Điểm số nổi bật & Biểu đồ kết quả */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Score & Evaluation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{attempt.examCode}</span>
              <span>·</span>
              <span>{attempt.examTitle}</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-black text-blue-600 dark:text-blue-400 tracking-tight tabular-nums">
                {attempt.score}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-400">
                / {attempt.maxScore}.0 điểm
              </span>
            </div>

            <div className="space-y-1">
              <div className={`text-sm font-bold flex items-center gap-1.5 ${evaluationSummary.color}`}>
                <Sparkles className="w-4 h-4" />
                <span>{evaluationSummary.badge}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {evaluationSummary.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block mb-0.5">Số câu đúng</span>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {attempt.correctCount} / {attempt.totalQuestions}
                </span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block mb-0.5">Số câu sai</span>
                <span className="text-lg font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                  {attempt.incorrectCount} câu
                </span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block mb-0.5">Thời gian thi</span>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                  {timeSpentMins}m {timeSpentSecs}s
                </span>
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
            <AccuracyDonut
              correct={attempt.correctCount}
              incorrect={attempt.incorrectCount}
              unanswered={attempt.unansweredCount}
            />
            <div className="flex items-center gap-4 text-xs mt-2">
              <span className="flex items-center gap-1 text-emerald-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Đúng ({attempt.correctCount})
              </span>
              <span className="flex items-center gap-1 text-rose-600">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Sai ({attempt.incorrectCount})
              </span>
              {attempt.unansweredCount > 0 && (
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span> Bỏ qua ({attempt.unansweredCount})
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Action Buttons CTAs */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {wrongQuestionIds.length > 0 && (
              <button
                onClick={() => onPracticeWrongQuestions(wrongQuestionIds)}
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>LUYỆN LẠI CÂU SAI ({wrongQuestionIds.length})</span>
              </button>
            )}
            <button
              onClick={() => onNavigate('library')}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>LÀM ĐỀ MỚI</span>
            </button>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg transition-colors cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>QUAY VỀ DASHBOARD</span>
          </button>
        </div>
      </div>

      {/* 10.B. PHÂN TÍCH TỪNG CÂU HỎI VỚI 4 BỘ LỌC (Mặc định: Câu sai) */}
      <div className="space-y-4">
        
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Phân tích đáp án chi tiết
            </h3>
            <p className="text-xs text-slate-500">
              Kiểm tra kỹ lời giải và kiến thức cần ghi nhớ để tránh lặp lại lỗi sai
            </p>
          </div>

          {/* 4 Filters Segmented Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
            <button
              onClick={() => setFilter('wrong')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'wrong'
                  ? 'bg-rose-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Câu trả lời sai ({attempt.incorrectCount})
            </button>

            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'correct'
                  ? 'bg-emerald-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Câu đúng ({attempt.correctCount})
            </button>

            <button
              onClick={() => setFilter('unanswered')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'unanswered'
                  ? 'bg-slate-900 dark:bg-slate-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Chưa làm ({attempt.unansweredCount})
            </button>

            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tất cả ({attempt.totalQuestions})
            </button>
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-4">
          {filteredQuestionResults.map((qr, index) => {
            const question = questionMap.get(qr.questionId);
            if (!question) return null;

            const isWrong = !qr.isCorrect && qr.userAnswer !== undefined;
            const isUnanswered = qr.userAnswer === undefined;
            const topic = getTopicById(question.topicId);

            return (
              <div
                key={qr.questionId}
                className={`p-5 rounded-xl border bg-white dark:bg-slate-900 transition-all ${
                  isWrong 
                    ? 'border-rose-300 dark:border-rose-900/60 shadow-xs' 
                    : qr.isCorrect
                    ? 'border-emerald-200 dark:border-emerald-900/50'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-slate-900 dark:text-white">
                      Câu hỏi {index + 1}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{topic?.name}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{question.difficulty}</span>
                  </div>

                  {qr.isCorrect ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-4 h-4" />
                      <span>Đúng</span>
                    </span>
                  ) : isUnanswered ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                      <HelpCircle className="w-4 h-4" />
                      <span>Chưa trả lời</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                      <X className="w-4 h-4" />
                      <span>Sai (Bạn chọn {qr.userAnswer})</span>
                    </span>
                  )}
                </div>

                {/* Optional Passage snippet */}
                {question.passage && (
                  <div className="mb-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 text-xs font-sans italic text-slate-700 dark:text-slate-300 max-h-28 overflow-y-auto reading-scrollbar">
                    {question.passage.content}
                  </div>
                )}

                {/* Question Prompt */}
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4 leading-relaxed">
                  {question.prompt}
                </h4>

                {/* Options with Visual Correct/Wrong indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  {question.options.map(opt => {
                    const isUserChoice = qr.userAnswer === opt.key;
                    const isCorrectChoice = question.correctAnswer === opt.key;

                    let style = 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                    let badge = `${opt.key}`;

                    if (isCorrectChoice) {
                      style = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-medium ring-1 ring-emerald-500/30';
                    } else if (isUserChoice) {
                      style = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-100 font-medium ring-1 ring-rose-500/30';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`flex items-start gap-2.5 p-3 rounded-lg border text-xs leading-relaxed ${style}`}
                      >
                        <span className="font-bold shrink-0">{badge}.</span>
                        <span>{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Explanation & Key Takeaway */}
                <div className="p-3.5 bg-blue-50/60 dark:bg-slate-800/80 rounded-xl border border-blue-100 dark:border-slate-700 space-y-2">
                  <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="text-blue-700 dark:text-blue-400">Lời giải chi tiết: </strong>
                    {question.explanation}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 pt-1 border-t border-blue-200/50 dark:border-slate-700">
                    <strong className="text-emerald-700 dark:text-emerald-400">Kiến thức cần ghi nhớ: </strong>
                    {question.keyTakeaway}
                  </div>
                </div>

              </div>
            );
          })}

          {filteredQuestionResults.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                Tuyệt vời! Không có câu hỏi nào trong mục này.
              </h4>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
