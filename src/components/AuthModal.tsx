import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { PRESET_ACCOUNTS, storage } from '../services/storage';
import { User, UserRole } from '../types';
import { 
  X, 
  LogIn, 
  UserPlus, 
  GraduationCap, 
  ShieldCheck, 
  User as UserIcon, 
  Sparkles,
  CheckCircle,
  AlertCircle,
  KeyRound,
  Mail,
  School
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  redirectMessage?: string;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  redirectMessage,
  onSuccess
}) => {
  const { loginWithUser, registerUser } = useAuth();
  const [mode, setMode] = useState<'preset' | 'login' | 'register'>(initialMode === 'register' ? 'register' : 'preset');
  
  React.useEffect(() => {
    if (initialMode === 'register') {
      setMode('register');
    } else {
      setMode('preset');
    }
  }, [initialMode, isOpen]);

  // Custom Login state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Register state
  const [regName, setRegName] = useState('');
  const [regClass, setRegClass] = useState('12A03');
  const [regSchool, setRegSchool] = useState('Trường THPT Yên Lãng');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  // Status & error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleQuickLogin = (account: User) => {
    loginWithUser(account);
    setSuccessMsg(`Đăng nhập thành công với vai trò ${account.name}!`);
    setTimeout(() => {
      onSuccess?.();
      onClose();
    }, 600);
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmed = loginIdentifier.trim().toLowerCase();
    if (!trimmed) {
      setErrorMsg('Vui lòng nhập Email hoặc Tên đăng nhập.');
      return;
    }
    if (!loginPassword) {
      setErrorMsg('Vui lòng nhập mật khẩu truy cập.');
      return;
    }

    // Check in PRESET_ACCOUNTS or registered accounts in storage
    const allKnown = [...PRESET_ACCOUNTS, ...storage.getRegisteredAccounts()];
    const matched = allKnown.find(acc => 
      acc.email.toLowerCase() === trimmed || 
      acc.name.toLowerCase() === trimmed || 
      acc.id.toLowerCase() === trimmed
    );

    if (matched) {
      loginWithUser(matched);
      setSuccessMsg(`Đăng nhập thành công! Chào mừng ${matched.name}.`);
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 600);
    } else {
      // Create user session directly for demo
      const newUser: User = {
        id: `user_${Date.now()}`,
        name: loginIdentifier.includes('@') ? loginIdentifier.split('@')[0] : loginIdentifier,
        email: loginIdentifier.includes('@') ? loginIdentifier : `${loginIdentifier}@thptyenlang.edu.vn`,
        role: 'student',
        targetScore: 90,
        school: 'Trường THPT Yên Lãng'
      };
      loginWithUser(newUser);
      setSuccessMsg(`Đăng nhập thành công! Chào mừng bạn tham gia HSA MASTER.`);
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 600);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!regName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên học sinh.');
      return;
    }
    if (!regEmail.trim()) {
      setErrorMsg('Vui lòng nhập email liên hệ.');
      return;
    }
    if (regPassword.length < 6) {
      setErrorMsg('Mật khẩu cần tối thiểu 6 ký tự để đảm bảo an toàn.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMsg('Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại.');
      return;
    }

    const newUser = registerUser({
      name: regName.trim(),
      email: regEmail.trim(),
      school: `${regSchool.trim()} (Lớp ${regClass.trim()})`,
      role: 'student'
    });

    setSuccessMsg(`Đăng ký thành công tài khoản cho học sinh ${newUser.name}! Đang chuyển hướng...`);
    setTimeout(() => {
      onSuccess?.();
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#10243A] to-[#1e3a5f] p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#D6B978] text-[#10243A]">
              HSA MASTER · XÁC THỰC
            </span>
            <span className="text-xs text-slate-300">THPT Yên Lãng</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight font-heading">
            Đăng nhập hệ thống khảo thí
          </h3>
          <p className="text-xs text-slate-200/90 mt-1">
            {redirectMessage || 'Mỗi tài khoản tham gia luyện thi và đánh giá năng lực đều cần đăng nhập để lưu kết quả.'}
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-1.5 gap-1.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setMode('preset'); setErrorMsg(null); }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mode === 'preset'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tài khoản chính thức</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('login'); setErrorMsg(null); }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Đăng nhập</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('register'); setErrorMsg(null); }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Đăng ký mới</span>
          </button>
        </div>

        {/* Feedback alerts */}
        <div className="px-6 pt-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-xs text-red-700 dark:text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto reading-scrollbar space-y-4">
          
          {/* TAB 1: PRESET OFFICIAL ACCOUNTS */}
          {mode === 'preset' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Chọn một trong các tài khoản chính thức của ban thực hiện dự án hoặc giáo viên bộ môn để đăng nhập ngay mà không cần nhập mật khẩu:
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                {/* 1. Nguyễn Khắc Lợi */}
                <button
                  type="button"
                  onClick={() => handleQuickLogin(PRESET_ACCOUNTS[0])}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-white dark:bg-slate-900/60 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      KL
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          Nguyễn Khắc Lợi
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          Học sinh thực hiện
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Lớp 12A03 · Trường THPT Yên Lãng
                      </span>
                    </div>
                  </div>
                  <LogIn className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>

                {/* 2. Nguyễn Thị Thu Huyền */}
                <button
                  type="button"
                  onClick={() => handleQuickLogin(PRESET_ACCOUNTS[1])}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 bg-white dark:bg-slate-900/60 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      TH
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          Nguyễn Thị Thu Huyền
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                          Học sinh thực hiện
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Lớp 12A03 · Trường THPT Yên Lãng
                      </span>
                    </div>
                  </div>
                  <LogIn className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </button>

                {/* 3. Cô Võ Thị Mỹ Ngà */}
                <button
                  type="button"
                  onClick={() => handleQuickLogin(PRESET_ACCOUNTS[2])}
                  className="w-full text-left p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/60 hover:border-amber-500 bg-amber-50/40 dark:bg-amber-950/20 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      MN
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                          Cô Võ Thị Mỹ Ngà
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                          Giáo viên bộ môn
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Giáo viên bộ môn Ngữ văn · Trường THPT Yên Lãng
                      </span>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-amber-500 transition-colors" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: CUSTOM LOGIN FORM */}
          {mode === 'login' && (
            <form onSubmit={handleCustomLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email hoặc Tên đăng nhập:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="Ví dụ: loi.nk.12a03@thptyenlang.edu.vn"
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Mật khẩu:
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Nhập mật khẩu của bạn..."
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
                <button
                  type="button"
                  onClick={() => setMode('preset')}
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  Chọn tài khoản có sẵn
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-4 h-4" />
                <span>ĐĂNG NHẬP VÀO HỆ THỐNG</span>
              </button>
            </form>
          )}

          {/* TAB 3: REGISTER NEW STUDENT */}
          {mode === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Họ và tên học sinh (*):
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Lớp (*):
                  </label>
                  <input
                    type="text"
                    required
                    value={regClass}
                    onChange={(e) => setRegClass(e.target.value)}
                    placeholder="12A03"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Trường (*):
                  </label>
                  <input
                    type="text"
                    required
                    value={regSchool}
                    onChange={(e) => setRegSchool(e.target.value)}
                    placeholder="THPT Yên Lãng"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email đăng ký (*):
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="an.nv@thptyenlang.edu.vn"
                    className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mật khẩu:
                  </label>
                  <input
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Tối thiểu 6 ký tự"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Xác nhận mật khẩu:
                  </label>
                  <input
                    type="password"
                    required
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    placeholder="Nhập lại mật khẩu"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5 mt-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>TẠO TÀI KHOẢN HỌC TẬP</span>
              </button>
            </form>
          )}

        </div>

        {/* Modal Footer Note */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-500">
          Sản phẩm học tập số môn Ngữ văn · Năm học 2026–2027 · THPT Yên Lãng
        </div>

      </div>
    </div>
  );
};
