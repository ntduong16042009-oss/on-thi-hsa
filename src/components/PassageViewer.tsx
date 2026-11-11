import React, { useState } from 'react';
import { BookOpen, Type, ZoomIn, ZoomOut } from 'lucide-react';

interface PassageViewerProps {
  passage: {
    title?: string;
    author?: string;
    source?: string;
    content: string;
  };
}

export const PassageViewer: React.FC<PassageViewerProps> = ({ passage }) => {
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose'
  }[fontSize];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
      
      {/* Top Header of Passage Box */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Ngữ liệu đọc hiểu</span>
        </div>

        {/* Text size controls */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md p-0.5">
          <button
            onClick={() => setFontSize('sm')}
            title="Cỡ chữ nhỏ"
            className={`px-1.5 py-0.5 text-xs font-medium rounded transition-colors ${fontSize === 'sm' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('base')}
            title="Cỡ chữ tiêu chuẩn"
            className={`px-1.5 py-0.5 text-xs font-medium rounded transition-colors ${fontSize === 'base' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            title="Cỡ chữ lớn"
            className={`px-1.5 py-0.5 text-xs font-medium rounded transition-colors ${fontSize === 'lg' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Content scroll area */}
      <div className="p-5 overflow-y-auto reading-scrollbar flex-1 space-y-4">
        {passage.title && (
          <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
            {passage.title}
          </h4>
        )}

        <div className={`text-slate-800 dark:text-slate-200 whitespace-pre-line font-sans ${fontSizeClass}`}>
          {passage.content}
        </div>

        {(passage.author || passage.source) && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 italic text-right">
            {passage.author && <span>— {passage.author}</span>}
            {passage.source && <span> ({passage.source})</span>}
          </div>
        )}
      </div>

    </div>
  );
};
