import React from 'react';
import { Bookmark, CheckCircle, Circle } from 'lucide-react';

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  questionIds: string[];
  answers: Record<string, string>;
  flaggedIds: string[];
  onSelectIndex: (index: number) => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  totalQuestions,
  currentIndex,
  questionIds,
  answers,
  flaggedIds,
  onSelectIndex
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs">
      
      {/* Title & Legend */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Danh sách câu hỏi
        </h4>
        <span className="text-xs font-semibold text-slate-500 tabular-nums">
          {Object.keys(answers).length}/{totalQuestions}
        </span>
      </div>

      {/* Legend keys */}
      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-4 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-blue-600"></span>
          <span>Đã trả lời</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span>
          <span>Chưa trả lời</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-amber-500"></span>
          <span>Đánh dấu</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded border-2 border-blue-600 bg-white dark:bg-slate-900"></span>
          <span>Đang chọn</span>
        </div>
      </div>

      {/* Numbers Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 max-h-[360px] overflow-y-auto reading-scrollbar p-1">
        {questionIds.map((qId, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = answers[qId] !== undefined;
          const isFlagged = flaggedIds.includes(qId);

          let buttonStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';

          if (isFlagged) {
            buttonStyle = 'bg-amber-500 text-white font-bold hover:bg-amber-600 shadow-xs';
          } else if (isAnswered) {
            buttonStyle = 'bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-xs';
          }

          if (isCurrent) {
            buttonStyle += ' ring-2 ring-blue-500 dark:ring-blue-400 ring-offset-2 dark:ring-offset-slate-900 scale-105';
          }

          return (
            <button
              key={qId}
              onClick={() => onSelectIndex(idx)}
              className={`h-9 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer relative ${buttonStyle}`}
            >
              {idx + 1}
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-300 ring-1 ring-white"></span>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
};
