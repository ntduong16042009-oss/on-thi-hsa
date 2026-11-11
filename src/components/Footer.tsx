import React from 'react';
import { BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                HSA<span className="text-blue-500">MASTER</span>
              </span>
            </div>
            
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest font-bold text-blue-400">
                SẢN PHẨM HỌC TẬP SỐ – MÔN NGỮ VĂN
              </div>
              <p className="text-slate-300 font-medium">
                HỌC THÔNG MINH – LUYỆN TẬP HIỆU QUẢ – CHINH PHỤC MỤC TIÊU.
              </p>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Sản phẩm học tập số môn Ngữ văn được nghiên cứu và phát triển bởi học sinh Trường THPT Yên Lãng, phục vụ công tác rèn luyện năng lực đọc hiểu và tư duy ngôn ngữ chuẩn khảo thí ĐHQG.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-slate-800">
              <div>
                <strong className="text-slate-200">Trường: </strong>Trường THPT Yên Lãng · <strong className="text-slate-200">Lớp: </strong>12A03 (Khóa 2024–2027) · <strong className="text-slate-200">Năm học: </strong>2026–2027
              </div>
              <div>
                <strong className="text-amber-400 font-semibold">Giáo viên: </strong>
                <span className="text-slate-200 font-medium">Võ Thị Mỹ Ngà</span>
              </div>
              <div>
                <strong className="text-slate-200">Nhóm học sinh thực hiện: </strong>
                <span className="text-blue-400 font-semibold">Nguyễn Khắc Lợi</span> và <span className="text-blue-400 font-semibold">Nguyễn Thị Thu Huyền</span>
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Chương trình luyện thi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('library')} className="hover:text-white transition-colors cursor-pointer">
                  Đề thi thử chuẩn HSA 2025
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('practice')} className="hover:text-white transition-colors cursor-pointer">
                  Luyện tập đọc hiểu chuyên sâu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('practice')} className="hover:text-white transition-colors cursor-pointer">
                  Luyện câu sai & chống mất điểm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('practice')} className="hover:text-white transition-colors cursor-pointer">
                  Chuyên đề Ngữ pháp & Tiếng Việt
                </button>
              </li>
            </ul>
          </div>

          {/* Project & Support info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Thông tin dự án số
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('project-intro')} className="text-blue-400 hover:text-white transition-colors cursor-pointer font-semibold">
                  Giới thiệu Dự án Học tập số
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-white transition-colors cursor-pointer">
                  Bảng theo dõi tiến độ cá nhân
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-white transition-colors cursor-pointer">
                  Lịch sử và phân tích lỗi sai
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026–2027 SẢN PHẨM HỌC TẬP SỐ MÔN NGỮ VĂN · THPT YÊN LÃNG. Nhóm tác giả: Nguyễn Khắc Lợi – Nguyễn Thị Thu Huyền.</p>
          <div className="flex items-center gap-6">
            <span>Lớp 12A03 (2024–2027)</span>
            <span>·</span>
            <span>HSA Master</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
