import React from 'react';
import { AlertTriangle, CheckCircle, HelpCircle, Bookmark, ArrowRight, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
  flaggedCount: number;
  timeRemainingText: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  totalQuestions,
  answeredCount,
  unansweredCount,
  flaggedCount,
  timeRemainingText
}) => {
  if (!isOpen) return null;

  const hasUnanswered = unansweredCount > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Xác nhận nộp bài thi
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Thời gian còn lại: <span className="font-semibold text-slate-700 dark:text-slate-300 tabular-nums">{timeRemainingText}</span>
            </p>
          </div>
        </div>

        {/* Warning if unanswered questions exist */}
        {hasUnanswered && (
          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-lg flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <span>
              Bạn vẫn còn <strong>{unansweredCount} câu hỏi</strong> chưa chọn đáp án. Bài thi sau khi nộp sẽ không thể chỉnh sửa!
            </span>
          </div>
        )}

        {/* Stats summary table */}
        <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-1">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold tabular-nums text-slate-900 dark:text-white">
              {answeredCount}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Đã trả lời
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className={`text-xl font-bold tabular-nums ${unansweredCount > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
              {unansweredCount}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Chưa trả lời
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400 mb-1">
              <Bookmark className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold tabular-nums text-slate-900 dark:text-white">
              {flaggedCount}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Cần xem lại
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Quay lại làm tiếp
          </button>
          <button
            onClick={onConfirm}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <span>Nộp bài ngay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
