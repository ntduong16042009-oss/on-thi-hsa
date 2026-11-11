import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  School,
  Feather,
  Cpu,
  Layers,
  Target
} from 'lucide-react';

interface ProjectIntroPageProps {
  onNavigate: (view: string) => void;
}

export const ProjectIntroPage: React.FC<ProjectIntroPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Formal Academic Emblem & Main Title Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300">
          <GraduationCap className="w-4 h-4 text-amber-500" />
          <span>DỰ ÁN CHUYỂN ĐỔI SỐ TRONG DẠY VÀ HỌC</span>
        </div>

        <div className="space-y-2">
          <span className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            BÁO CÁO & XÁC NHẬN SẢN PHẨM
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase font-heading leading-tight">
            SẢN PHẨM HỌC TẬP SỐ<br />
            <span className="text-blue-600 dark:text-blue-400">MÔN NGỮ VĂN</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Hệ thống Khảo thí & Luyện thi Đánh giá Năng lực Ngữ văn Trực tuyến (HSA Master)
          </p>
        </div>
      </div>

      {/* Official Academic Certificate/Spec Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none rounded-bl-full" />
        
        <div className="space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Thông tin định danh sản phẩm học tập
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <School className="w-3.5 h-3.5" />
                <span>Trường</span>
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                THPT Yên Lãng
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Học sinh lớp</span>
              </span>
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                12A03
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Khóa học</span>
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                2024–2027
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Năm học</span>
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                2026–2027
              </div>
            </div>
          </div>

          {/* Teacher guidance spotlight */}
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200/80 dark:border-amber-900/50 rounded-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                GV
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400 block">
                  Giáo viên bộ môn
                </span>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  Võ Thị Mỹ Ngà
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Tổ Ngữ văn · Trường THPT Yên Lãng
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/60 px-3 py-1 rounded-full">
                Tổ Ngữ văn · THPT Yên Lãng
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Authors Section */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Đồng tác giả sản phẩm
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase font-heading">
            NHÓM HỌC SINH THỰC HIỆN
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Hai học sinh trực tiếp lên ý tưởng, nghiên cứu cấu trúc đề thi, biên soạn nội dung và phát triển nền tảng công nghệ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Author 1: Nguyễn Khắc Lợi */}
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500/30 dark:border-blue-500/20 rounded-2xl p-6 shadow-xs hover:border-blue-500 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
                  KL
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Nguyễn Khắc Lợi
                  </h3>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Đồng tác giả · Học sinh Lớp 12A03
                  </div>
                  <div className="text-xs text-slate-500">
                    Trường THPT Yên Lãng
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  Vai trò chính trong dự án:
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-500 dark:text-slate-400">
                  <li>Xây dựng cấu trúc hệ thống và lập trình kiến trúc nền tảng web.</li>
                  <li>Thuật toán chấm điểm tự động, tính thời gian và bảo lưu trạng thái phòng thi.</li>
                  <li>Thiết kế trải nghiệm người dùng hiện đại, tối ưu tương tác khảo thí.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Author 2: Nguyễn Thị Thu Huyền */}
          <div className="bg-white dark:bg-slate-900 border-2 border-indigo-500/30 dark:border-indigo-500/20 rounded-2xl p-6 shadow-xs hover:border-indigo-500 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-700 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
                  TH
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Nguyễn Thị Thu Huyền
                  </h3>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                    Đồng tác giả · Học sinh Lớp 12A03
                  </div>
                  <div className="text-xs text-slate-500">
                    Trường THPT Yên Lãng
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  Vai trò chính trong dự án:
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-500 dark:text-slate-400">
                  <li>Nghiên cứu ma trận đề thi HSA ĐHQG môn Ngữ văn và tư duy ngôn ngữ.</li>
                  <li>Tuyển chọn, biên soạn ngữ liệu đọc hiểu và ngân hàng hơn 100 câu hỏi mẫu.</li>
                  <li>Soạn thảo hệ thống lời giải chi tiết và kiến thức cần ghi nhớ then chốt.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Project Philosophy & Academic Rationale */}
      <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ý nghĩa & Định hướng sư phạm
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Mục Tiêu Xây Dựng Sản Phẩm Học Tập Số
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Feather className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Đổi mới phương pháp học Ngữ văn
            </h4>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400">
              Chuyển đổi từ việc học thuộc lòng thụ động sang phát triển năng lực tư duy ngôn ngữ, phân tích ngữ liệu khách quan và rèn luyện kỹ năng đọc sâu.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Sát thực tiễn thi Đánh giá năng lực
            </h4>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400">
              Bám sát 10 chuyên đề cốt lõi của kỳ thi HSA ĐHQGHN và ĐHQG-HCM, giúp học sinh THPT làm quen áp lực thời gian thực và cấu trúc đề chuẩn.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Cá nhân hóa việc khắc phục lỗi sai
            </h4>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400">
              Hệ thống tự động phân tích câu sai, tổng hợp thành chế độ luyện lại riêng biệt và cung cấp biểu đồ tiến bộ giúp người học làm chủ quá trình tiến bộ.
            </p>
          </div>
        </div>

        {/* CTA to start using the system */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Sản phẩm được lưu trữ và vận hành trực tuyến phục vụ học tập tại Trường THPT Yên Lãng.
          </div>
          <button
            onClick={() => onNavigate('library')}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors cursor-pointer shrink-0"
          >
            <span>VÀO PHÒNG THI THỬ HSA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
