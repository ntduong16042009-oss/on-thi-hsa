import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useExam } from '../context/ExamContext';
import { 
  BookOpen, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldCheck, 
  UserCheck, 
  PlayCircle,
  Clock
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenAuthModal?: (mode?: 'login' | 'register') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenAuthModal }) => {
  const { user, isAdmin, switchRole, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { activeSession } = useExam();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'project-intro', label: 'Giới thiệu dự án' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'library', label: 'Thư viện đề' },
    { id: 'practice', label: 'Chế độ luyện' },
    { id: 'history', label: 'Lịch sử thi' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                  HSA<span className="text-blue-600 dark:text-blue-400">MASTER</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                  Sản phẩm học tập số · THPT Yên Lãng
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: User actions, login, role toggle & theme */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Active exam in-progress banner indicator */}
            {activeSession && (
              <button
                onClick={() => handleLinkClick('exam-room')}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 hover:bg-amber-100 transition-colors cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5 animate-spin" />
                <span className="whitespace-nowrap">Đang thi: {activeSession.examCode}</span>
              </button>
            )}

            {/* Authenticated user pill or Login buttons */}
            {user ? (
              <div className="flex items-center gap-2">

                {/* User Name Badge */}
                <div className="hidden sm:flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center">
                    {user.name.charAt(0)}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 max-w-[120px] truncate" title={user.name}>
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={logout}
                  title="Đăng xuất khỏi tài khoản"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer text-xs flex items-center gap-1"
                >
                  <span className="hidden xl:inline text-[11px] font-medium">Đăng xuất</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuthModal?.('login')}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer whitespace-nowrap"
                >
                  Đăng nhập
                </button>
                <button
                  onClick={() => onOpenAuthModal?.('register')}
                  className="hidden sm:inline-flex px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                >
                  Đăng ký
                </button>
              </div>
            )}

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              aria-label="Chuyển chế độ giao diện"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleLinkClick('library')}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Thi thử 60p</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2">
          {user && (
            <div className="p-3 mb-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  {user.name.charAt(0)}
                </span>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{user.name}</div>
                  <div className="text-[10px] text-slate-500">{user.school}</div>
                </div>
              </div>
              <button
                onClick={() => { logout(); setMobileMenuOpen(false); }}
                className="text-xs text-red-600 font-semibold px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-950/40"
              >
                Đăng xuất
              </button>
            </div>
          )}

          {!user && (
            <div className="grid grid-cols-2 gap-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
              <button
                onClick={() => { onOpenAuthModal?.('login'); setMobileMenuOpen(false); }}
                className="py-2 text-center text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              >
                Đăng nhập
              </button>
              <button
                onClick={() => { onOpenAuthModal?.('register'); setMobileMenuOpen(false); }}
                className="py-2 text-center text-xs font-bold rounded-lg bg-blue-600 text-white"
              >
                Đăng ký
              </button>
            </div>
          )}

          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentView === link.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('library')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Bắt đầu thi thử 60 phút</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
