import React, { useState } from 'react';
import { HSA_TOPICS } from '../data/topics';
import { storage } from '../services/storage';
import { HSATopicId, Difficulty, PracticeMode, Question } from '../types';
import { 
  Clock, 
  HelpCircle, 
  RotateCcw, 
  BookOpen, 
  PlayCircle, 
  CheckCircle,
  Filter,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PracticeModesProps {
  onStartCustomPractice: (
    mode: PracticeMode,
    title: string,
    code: string,
    questionIds: string[],
    durationMinutes: number
  ) => void;
  onNavigate: (view: string) => void;
  initialTopic?: string;
}

export const PracticeModes: React.FC<PracticeModesProps> = ({
  onStartCustomPractice,
  onNavigate,
  initialTopic
}) => {
  const allQuestions = storage.getQuestions();
  const wrongQuestionIds = storage.getAllWrongQuestionIds();

  // Mode 4 states
  const [selectedTopic, setSelectedTopic] = useState<HSATopicId>((initialTopic as HSATopicId) || 'doc-hieu');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Mode 2 state: Practice any 10-20 general questions
  const handleStartGeneralPractice = () => {
    // Pick 15 questions with answers shown immediately
    const sampleIds = allQuestions.slice(0, 15).map(q => q.id);
    onStartCustomPractice(
      'practice',
      'Luyện tập Chuyên sâu Từng câu có Lời giải tức thì',
      'PRACTICE-01',
      sampleIds,
      30
    );
  };

  // Mode 3: Drill wrong questions
  const handleStartWrongDrill = () => {
    if (wrongQuestionIds.length === 0) {
      alert('Bạn chưa có câu hỏi nào làm sai trong lịch sử thi!');
      return;
    }
    onStartCustomPractice(
      'wrong-drill',
      `Khắc phục lỗ hổng: Luyện lại ${wrongQuestionIds.length} câu làm sai`,
      'WRONG-FIX',
      wrongQuestionIds,
      Math.max(15, wrongQuestionIds.length * 2)
    );
  };

  // Mode 4: Topic drill
  const handleStartTopicDrill = () => {
    let pool = allQuestions.filter(q => q.topicId === selectedTopic);

    if (selectedDifficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === selectedDifficulty);
    }

    if (pool.length === 0) {
      alert('Không tìm thấy câu hỏi phù hợp với tiêu chí lọc này. Hãy thử chọn tất cả mức độ khó.');
      return;
    }

    // Shuffle and pick questionCount
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, questionCount).map(q => q.id);
    const topicObj = HSA_TOPICS.find(t => t.id === selectedTopic);

    onStartCustomPractice(
      'topic-drill',
      `Luyện chuyên đề: ${topicObj?.name || 'Ngữ văn'} (${picked.length} câu)`,
      `TOPIC-${selectedTopic.toUpperCase().slice(0, 4)}`,
      picked,
      Math.max(10, picked.length * 2)
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-2 pb-6 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Các Chế Độ Luyện Thi Độc Lập
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Lựa chọn phương thức ôn luyện phù hợp theo từng giai đoạn mục tiêu điểm số của bạn
        </p>
      </div>

      {/* 4 Mode Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* MODE 1: Thi Thử */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                01
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Áp lực phòng thi thật</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Chế độ 1 – Thi Thử Chuẩn Hóa
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mô phỏng 100% quy chế phòng thi: Có giới hạn thời gian đếm ngược chính xác, không hiển thị đáp án trong lúc làm bài, tự động nộp bài và chấm điểm sau khi hoàn thành.
            </p>

            <ul className="text-xs text-slate-500 space-y-1 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                <span>Đồng hồ đếm ngược với cảnh báo 10p, 5p</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                <span>Tự động lưu tiến trình và khôi phục khi mất mạng</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onNavigate('library')}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
          >
            <Clock className="w-4 h-4" />
            <span>Chọn đề từ Thư viện để thi thử</span>
          </button>
        </div>

        {/* MODE 2: Luyện Tập (Xem giải ngay) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                02
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Học sâu từng câu</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Chế độ 2 – Luyện Tập Từng Câu
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Làm từng câu không giới hạn thời gian gắt gao. Ngay khi chọn đáp án, hệ thống hiển thị ngay kết quả Đúng/Sai, lời giải thích chi tiết và kiến thức cần ghi nhớ.
            </p>

            <ul className="text-xs text-slate-500 space-y-1 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Xem lời giải ngay sau mỗi lần chọn đáp án</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Rèn tư duy và thẩm thấu phương pháp giải bài</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleStartGeneralPractice}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Bắt đầu Luyện tập ngay (15 câu)</span>
          </button>
        </div>

        {/* MODE 3: Luyện Câu Sai */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
                03
              </span>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                {wrongQuestionIds.length} câu đang lưu
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Chế độ 3 – Luyện Lại Câu Sai
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tự động tập hợp tất cả các câu bạn từng trả lời sai trong các lần thi trước thành một bộ câu hỏi luyện tập riêng biệt. Khắc phục triệt để lỗ hổng kiến thức.
            </p>

            <ul className="text-xs text-slate-500 space-y-1 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>Tự động đồng bộ từ lịch sử thi của bạn</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>Đo lường sự cải thiện sau mỗi vòng luyện</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleStartWrongDrill}
            disabled={wrongQuestionIds.length === 0}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Luyện {wrongQuestionIds.length} câu sai</span>
          </button>
        </div>

        {/* MODE 4: Luyện Theo Chủ Đề (Custom Builder) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-purple-400 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                04
              </span>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Tùy biến cấu hình</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Chế độ 4 – Luyện Theo Chuyên Đề
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tự tạo bài luyện tập tùy biến: Chọn 1 trong 10 chuyên đề năng lực HSA, chọn số lượng câu và độ khó mong muốn để tập trung bứt phá điểm số.
            </p>

            {/* Custom controls */}
            <div className="space-y-2.5 pt-1">
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                  Chọn chuyên đề năng lực:
                </label>
                <select
                  value={selectedTopic}
                  onChange={e => setSelectedTopic(e.target.value as HSATopicId)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  {HSA_TOPICS.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.weightPercent}% đề thi)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Số câu:
                  </label>
                  <select
                    value={questionCount}
                    onChange={e => setQuestionCount(Number(e.target.value))}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200"
                  >
                    <option value={5}>5 câu</option>
                    <option value={10}>10 câu</option>
                    <option value={15}>15 câu</option>
                    <option value={20}>20 câu</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Độ khó:
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={e => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200"
                  >
                    <option value="all">Tất cả mức độ</option>
                    <option value="Cơ bản">Cơ bản</option>
                    <option value="Thông hiểu">Thông hiểu</option>
                    <option value="Vận dụng">Vận dụng</option>
                    <option value="Vận dụng cao">Vận dụng cao</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleStartTopicDrill}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tạo bài luyện chuyên đề ({questionCount} câu)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
