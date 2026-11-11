import React from 'react';
import { Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ExamTimerProps {
  remainingSeconds: number;
  warningState: 'normal' | 'ten-min' | 'five-min';
  isAutoSaved?: boolean;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({
  remainingSeconds,
  warningState,
  isAutoSaved = true
}) => {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  let containerStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700';
  let badgeStyle = 'text-blue-600 dark:text-blue-400';

  if (warningState === 'five-min') {
    containerStyle = 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-200 border-rose-300 dark:border-rose-800 animate-pulse';
    badgeStyle = 'text-rose-600 dark:text-rose-400';
  } else if (warningState === 'ten-min') {
    containerStyle = 'bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-800';
    badgeStyle = 'text-amber-600 dark:text-amber-400';
  }

  return (
    <div className="flex items-center gap-3">
      
      {/* Auto save indicator */}
      <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        <span className="whitespace-nowrap">Đã lưu tự động</span>
      </div>

      {/* Countdown timer pill */}
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm font-bold shadow-xs tabular-nums ${containerStyle}`}>
        {warningState !== 'normal' ? (
          <AlertTriangle className={`w-4 h-4 ${badgeStyle}`} />
        ) : (
          <Clock className={`w-4 h-4 ${badgeStyle}`} />
        )}
        <span className="text-base tracking-wider">{formattedTime}</span>
      </div>

    </div>
  );
};
