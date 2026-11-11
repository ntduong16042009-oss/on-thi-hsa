import React, { useEffect, useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight, 
  X,
  School
} from 'lucide-react';

interface ProjectIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
  onViewFullProject: () => void;
  onLoginDirect?: () => void;
}

export const ProjectIntroModal: React.FC<ProjectIntroModalProps> = ({
  isOpen,
  onClose,
  onExplore,
  onViewFullProject,
  onLoginDirect
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-slate-900 dark:text-slate-100 shadow-2xl relative overflow-hidden">
        
        {/* Background decorative subtle accent */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/10 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10 cursor-pointer"
          title="Đóng thông báo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Formal Header Emblem */}
        <div className="flex flex-col items-center text-center space-y-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-800 text-white flex items-center justify-center shadow-md ring-4 ring-blue-100 dark:ring-blue-950/60">
            <GraduationCap className="w-7 h-7 text-amber-300" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Công trình Đổi mới Phương pháp Tự học
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase font-heading">
              SẢN PHẨM HỌC TẬP SỐ – MÔN NGỮ VĂN
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Hệ thống Khảo thí & Luyện thi Đánh giá năng lực HSA Master
            </p>
          </div>
        </div>

        {/* Academic Specs & Teacher Spotlight */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl text-center mb-5">
          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Trường học</span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
              THPT Yên Lãng
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Lớp</span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block">
              12A03
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Khóa học</span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
              2024–2027
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Năm học</span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
              2026–2027
            </span>
          </div>
        </div>

        {/* Teacher Spotlight */}
        <div className="mb-5 p-3.5 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 rounded-xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
              Cô
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400 block">
                Giáo viên bộ môn
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Võ Thị Mỹ Ngà
              </div>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
            Trường THPT Yên Lãng
          </span>
        </div>

        {/* Group of Authors Spotlight (Prominent) */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>NHÓM HỌC SINH THỰC HIỆN</span>
            </span>
            <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
              Học sinh lớp 12A03
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                KL
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Nguyễn Khắc Lợi
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  Học sinh lớp 12A03 · THPT Yên Lãng
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                TH
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Nguyễn Thị Thu Huyền
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  Học sinh lớp 12A03 · THPT Yên Lãng
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 mb-5">
          Sản phẩm học tập số này được xây dựng nhằm hiện đại hóa việc học môn Ngữ văn, cung cấp giải pháp luyện thi trắc nghiệm khách quan chuẩn cấu trúc Đánh giá năng lực (HSA/ĐHQG), hỗ trợ học sinh tự học và phân tích chi tiết từng lỗi sai.
        </p>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onViewFullProject}
            className="w-full sm:w-auto text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2 px-3 text-center cursor-pointer transition-colors"
          >
            Xem giới thiệu dự án chi tiết
          </button>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            {onLoginDirect && (
              <button
                onClick={onLoginDirect}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors cursor-pointer"
              >
                <span>ĐĂNG NHẬP / ĐĂNG KÝ</span>
              </button>
            )}
            <button
              onClick={onExplore}
              className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>VÀO HỌC TẬP & LUYỆN THI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
