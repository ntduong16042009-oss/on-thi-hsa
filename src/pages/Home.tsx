import React from 'react';
import { 
  PlayCircle, 
  CheckCircle, 
  Award, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  ArrowRight,
  Target,
  FileText,
  LogIn,
  UserPlus
} from 'lucide-react';
import { MOCK_EXAMS } from '../data/exams';
import { HSA_TOPICS } from '../data/topics';
import { useAuth } from '../context/AuthContext';

interface HomeProps {
  onNavigate: (view: string, examId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-transparent dark:from-slate-900/60 dark:via-slate-950 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>SẢN PHẨM HỌC TẬP SỐ – MÔN NGỮ VĂN</span>
                </div>
                <button
                  onClick={() => onNavigate('project-intro')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                >
                  <span>THPT Yên Lãng · Lớp 12A03</span>
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                </button>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance font-heading">
                CHINH PHỤC HSA BẮT ĐẦU TỪ HÔM NAY
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Hệ thống luyện thi trực tuyến giúp bạn rèn luyện năng lực đọc hiểu, tư duy ngôn ngữ và kỹ năng xử lý câu hỏi thông qua những bộ đề được thiết kế bài bản theo chuẩn khảo thí ĐHQG.
              </p>

              {/* Author attribution banner */}
              <div className="p-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs border border-slate-200 dark:border-slate-800 rounded-xl text-xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">Giáo viên: </span>
                    <span className="font-bold text-slate-800 dark:text-slate-100">Võ Thị Mỹ Ngà</span>
                    <span className="text-slate-400 text-[11px] ml-1.5">(Trường THPT Yên Lãng)</span>
                  </div>
                  <button
                    onClick={() => onNavigate('project-intro')}
                    className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                  >
                    Xem hồ sơ dự án →
                  </button>
                </div>

                <div className="text-slate-600 dark:text-slate-300 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">Nhóm học sinh thực hiện: </span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">Nguyễn Khắc Lợi</span> và <span className="font-bold text-blue-600 dark:text-blue-400">Nguyễn Thị Thu Huyền</span>
                  <span className="text-slate-400 block sm:inline sm:ml-1 text-[11px]">(Lớp 12A03 · Khóa 2024–2027 · Năm học 2026–2027)</span>
                </div>
              </div>

              {/* Unauthenticated Quick Login Prompt Card */}
              {!user && (
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Bạn là học sinh mới truy cập?</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">
                      Hãy đăng nhập hoặc tạo tài khoản để làm bài thi chuẩn 60 phút và lưu lịch sử điểm số cá nhân!
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onNavigate('open-auth-login')}
                      className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      <span>Đăng nhập</span>
                    </button>
                    <button
                      onClick={() => onNavigate('open-auth-register')}
                      className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>Đăng ký</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('library')}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>BẮT ĐẦU LUYỆN THI</span>
                </button>

                <button
                  onClick={() => onNavigate('dashboard')}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Xem Dashboard cá nhân</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>100% Ma trận chuẩn HSA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Chấm điểm & phân tích tức thì</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Lời giải chi tiết từng câu</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-fidelity Visual Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 aspect-16/10">
                <img
                  src="/src/assets/images/hero_student_study_1794365894164.jpg"
                  alt="Học sinh ôn luyện ngữ văn HSA trong thư viện"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white space-y-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-blue-300">
                      Mô phỏng kỳ thi thực tế
                    </div>
                    <div className="text-sm font-bold">
                      Phần thi Tư duy Định tính (Ngữ văn - Ngôn ngữ)
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Numerical Stats Counters (Quantitative proof) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
              12+
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Đề thi chuẩn hóa
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Cập nhật cấu trúc ĐHQG mới nhất
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
              105+
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Câu hỏi mẫu chất lượng
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kèm ngữ liệu & lời giải chi tiết
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
              4,850+
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Lượt luyện tập
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Học sinh trên toàn quốc tham gia
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 tabular-nums">
              10
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Chủ đề kiến thức
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bao quát toàn diện năng lực đọc hiểu
            </p>
          </div>

        </div>
      </section>

      {/* Featured Exams Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Đề thi mới nhất & Chuẩn cấu trúc
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Luyện tập các bộ đề được đánh giá cao nhất để đánh giá chính xác năng lực hiện tại
            </p>
          </div>
          <button
            onClick={() => onNavigate('library')}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <span>Xem tất cả thư viện đề</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_EXAMS.slice(0, 3).map(exam => (
            <div
              key={exam.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                    {exam.code}
                  </span>
                  <span>{exam.difficulty}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {exam.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {exam.description}
                </p>

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
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigate('exam-detail', exam.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Vào phòng thi</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Practice Modes Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Phương pháp học khoa học
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              4 Chế độ Luyện thi Độc lập
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tùy chỉnh lộ trình ôn thi phù hợp với từng giai đoạn: từ thi thử áp lực thời gian thực, luyện tập từng câu có lời giải ngay, đến tổng ôn theo từng chủ đề còn yếu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-bold text-sm text-white">Chế độ Thi Thử</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Đồng hồ đếm ngược, quy chế nghiêm ngặt, chấm điểm và phân tích sau khi nộp bài.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-bold text-sm text-white">Chế độ Luyện Tập</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Làm từng câu hỏi, kiểm tra đáp án và xem lời giải thích chi tiết ngay lập tức.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-bold text-sm text-white">Luyện Câu Sai</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tự động gom các câu bạn từng làm sai từ các bài thi trước để khắc phục lỗ hổng.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="font-bold text-sm text-white">Luyện Theo Chủ Đề</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Chọn chuyên đề (Biện pháp tu từ, Ngữ pháp, Từ Hán Việt...) để đột phá điểm số.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
            <button
              onClick={() => onNavigate('practice')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <span>Khám phá các chế độ luyện</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10 Knowledge Domains Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            10 Chuyên đề Năng lực Ngữ văn HSA
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hệ thống ngân hàng câu hỏi phân tầng theo cấu trúc chuẩn khảo thí ĐHQG
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {HSA_TOPICS.map((topic, i) => (
            <div
              key={topic.id}
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1.5 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>0{i + 1}</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{topic.weightPercent}% đề</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {topic.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
