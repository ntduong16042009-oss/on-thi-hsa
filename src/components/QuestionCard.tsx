import React from 'react';
import { Question, PracticeMode } from '../types';
import { Bookmark, Check, X, HelpCircle, RotateCcw } from 'lucide-react';
import { getTopicById } from '../data/topics';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  userAnswer?: 'A' | 'B' | 'C' | 'D';
  isFlagged: boolean;
  mode: PracticeMode;
  onSelectAnswer: (key: 'A' | 'B' | 'C' | 'D') => void;
  onClearAnswer: () => void;
  onToggleFlag: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
  isFlagged,
  mode,
  onSelectAnswer,
  onClearAnswer,
  onToggleFlag
}) => {
  const isPracticeMode = mode === 'practice';
  const hasAnswered = userAnswer !== undefined;
  const isAnswerCorrect = hasAnswered && userAnswer === question.correctAnswer;
  const topic = getTopicById(question.topicId);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 md:p-6 shadow-xs flex flex-col justify-between">
      
      {/* Top Question Info & Actions */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">
              Câu {questionNumber}
            </span>
            <span>/ {totalQuestions}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              {topic?.name || 'Ngữ văn'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">
              {question.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {hasAnswered && (
              <button
                onClick={onClearAnswer}
                title="Bỏ chọn đáp án"
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Bỏ chọn</span>
              </button>
            )}

            <button
              onClick={onToggleFlag}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isFlagged
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                  : 'text-slate-500 dark:text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isFlagged ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
            </button>
          </div>

        </div>

        {/* Prompt */}
        <div className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-6 leading-relaxed whitespace-pre-line">
          {question.prompt}
        </div>

        {/* Options list A, B, C, D */}
        <div className="space-y-3">
          {question.options.map(opt => {
            const isSelected = userAnswer === opt.key;
            
            // In practice mode, show correct/wrong highlight immediately if answered
            let optionStyles = 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-slate-900/50';
            let circleStyles = 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400';

            if (isPracticeMode && hasAnswered) {
              if (opt.key === question.correctAnswer) {
                optionStyles = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100';
                circleStyles = 'border-emerald-500 bg-emerald-600 text-white';
              } else if (isSelected) {
                optionStyles = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100';
                circleStyles = 'border-rose-500 bg-rose-600 text-white';
              }
            } else if (isSelected) {
              optionStyles = 'border-blue-600 dark:border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 shadow-xs ring-1 ring-blue-600/20';
              circleStyles = 'border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white';
            }

            return (
              <button
                key={opt.key}
                onClick={() => onSelectAnswer(opt.key)}
                className={`w-full text-left flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer ${optionStyles}`}
              >
                <span className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors ${circleStyles}`}>
                  {opt.key}
                </span>
                <span className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal pt-0.5">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Immediate explanation in Practice Mode */}
        {isPracticeMode && hasAnswered && (
          <div className="mt-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2 font-semibold text-sm">
              {isAnswerCorrect ? (
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Chính xác! Đáp án {question.correctAnswer}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                  <X className="w-4 h-4" />
                  <span>Chưa chính xác. Đáp án đúng là {question.correctAnswer}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              {question.explanation}
            </p>

            <div className="text-[11px] bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400">Ghi nhớ then chốt: </strong>
              {question.keyTakeaway}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
