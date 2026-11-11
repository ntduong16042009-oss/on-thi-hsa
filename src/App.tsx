import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ExamProvider, useExam } from './context/ExamContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Library } from './pages/Library';
import { ExamRoom } from './pages/ExamRoom';
import { ResultPage } from './pages/ResultPage';
import { PracticeModes } from './pages/PracticeModes';
import { HistoryPage } from './pages/HistoryPage';
import { ProjectIntroPage } from './pages/ProjectIntroPage';
import { ProjectIntroModal } from './components/ProjectIntroModal';
import { AuthModal } from './components/AuthModal';
import { Exam, PracticeMode } from './types';
import { storage } from './services/storage';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const { startExam, activeSession } = useExam();
  
  // Navigation view state
  const [currentView, setCurrentView] = useState<string>(() => {
    // If active session exists in storage, stay in exam-room
    if (storage.getActiveSession()) return 'exam-room';
    return 'home';
  });

  // Modal to introduce digital learning product on first entry
  const [showIntroModal, setShowIntroModal] = useState<boolean>(() => {
    const seen = localStorage.getItem('hsa_intro_modal_seen');
    return seen !== 'true';
  });

  // Auth modal state for login requirement
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'register';
    message?: string;
    pendingAction?: () => void;
  }>({
    isOpen: false,
    mode: 'login'
  });

  const [selectedExamId, setSelectedExamId] = useState<string | undefined>(undefined);
  const [selectedAttemptId, setSelectedAttemptId] = useState<string | undefined>(undefined);
  const [initialPracticeTopic, setInitialPracticeTopic] = useState<string | undefined>(undefined);

  const openAuth = (mode: 'login' | 'register' = 'login', message?: string, pendingAction?: () => void) => {
    setAuthModal({
      isOpen: true,
      mode,
      message,
      pendingAction
    });
  };

  // Auto-open auth modal whenever an unauthenticated visitor enters the platform
  React.useEffect(() => {
    if (!user && !showIntroModal) {
      const timer = setTimeout(() => {
        openAuth('login', 'Chào mừng bạn đến với HSA MASTER! Vui lòng chọn tài khoản hoặc đăng ký để bắt đầu học tập.');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [user, showIntroModal]);

  const handleNavigate = (view: string, param?: string) => {
    if (view === 'open-auth-login') {
      openAuth('login');
      return;
    }
    if (view === 'open-auth-register') {
      openAuth('register');
      return;
    }

    // Check if accessing protected sections without being logged in
    const protectedViews = ['dashboard', 'history', 'practice', 'library'];
    if (!user && protectedViews.includes(view)) {
      openAuth(
        'login',
        `Vui lòng đăng nhập tài khoản học sinh hoặc giáo viên để truy cập ${view === 'dashboard' ? 'Bảng điều khiển cá nhân' : view === 'history' ? 'Lịch sử thi' : view === 'library' ? 'Thư viện đề thi' : 'Chế độ luyện tập'}!`,
        () => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      );
      return;
    }

    if (view === 'result') {
      setSelectedAttemptId(param);
    } else if (view === 'exam-detail') {
      // Find exam and start it
      const exams = storage.getExams();
      const exam = exams.find(e => e.id === param);
      if (exam) {
        handleStartExam(exam);
        return;
      }
    } else if (view === 'practice' && param) {
      if (param === 'wrong-mode') {
        const wrongIds = storage.getAllWrongQuestionIds();
        if (wrongIds.length > 0) {
          handleStartCustomPractice(
            'wrong-drill',
            `Luyện lại ${wrongIds.length} câu làm sai`,
            'WRONG-FIX',
            wrongIds,
            Math.max(15, wrongIds.length * 2)
          );
          return;
        }
      } else {
        setInitialPracticeTopic(param);
      }
    }

    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartExam = (exam: Exam) => {
    if (!user) {
      openAuth(
        'login',
        `Vui lòng đăng nhập tài khoản để vào phòng thi ${exam.title} và lưu bài thi!`,
        () => {
          startExam(
            exam.id,
            exam.title,
            exam.code,
            exam.questionIds,
            exam.durationMinutes,
            'mock-exam'
          );
          setCurrentView('exam-room');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      );
      return;
    }

    startExam(
      exam.id,
      exam.title,
      exam.code,
      exam.questionIds,
      exam.durationMinutes,
      'mock-exam'
    );
    setCurrentView('exam-room');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartCustomPractice = (
    mode: PracticeMode,
    title: string,
    code: string,
    questionIds: string[],
    durationMinutes: number
  ) => {
    if (!user) {
      openAuth(
        'login',
        'Vui lòng đăng nhập để bắt đầu phiên luyện tập và lưu kết quả!',
        () => {
          startExam(
            `custom_${Date.now()}`,
            title,
            code,
            questionIds,
            durationMinutes,
            mode
          );
          setCurrentView('exam-room');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      );
      return;
    }

    startExam(
      `custom_${Date.now()}`,
      title,
      code,
      questionIds,
      durationMinutes,
      mode
    );
    setCurrentView('exam-room');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePracticeWrongQuestions = (questionIds: string[]) => {
    handleStartCustomPractice(
      'wrong-drill',
      `Khắc phục lỗ hổng: Luyện lại ${questionIds.length} câu làm sai`,
      'WRONG-REVIEW',
      questionIds,
      Math.max(15, questionIds.length * 2)
    );
  };

  const handleDismissIntroModal = () => {
    localStorage.setItem('hsa_intro_modal_seen', 'true');
    setShowIntroModal(false);
    if (!user) {
      openAuth('login', 'Chào mừng bạn đến với HSA MASTER! Vui lòng chọn tài khoản hoặc đăng nhập để bắt đầu học tập.');
    }
  };

  const handleExploreFromModal = () => {
    localStorage.setItem('hsa_intro_modal_seen', 'true');
    setShowIntroModal(false);
    if (!user) {
      openAuth('login', 'Chào mừng bạn đến với HSA MASTER! Vui lòng đăng nhập tài khoản để vào phòng thi thử và lưu bảng điểm!', () => {
        handleNavigate('library');
      });
    } else {
      handleNavigate('library');
    }
  };

  const handleViewFullProjectFromModal = () => {
    localStorage.setItem('hsa_intro_modal_seen', 'true');
    setShowIntroModal(false);
    handleNavigate('project-intro');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        onOpenAuthModal={(m) => openAuth(m || 'login')}
      />

      <main className="flex-1">
        {currentView === 'home' && (
          <Home onNavigate={handleNavigate} />
        )}

        {currentView === 'project-intro' && (
          <ProjectIntroPage onNavigate={handleNavigate} />
        )}

        {currentView === 'dashboard' && (
          <Dashboard onNavigate={handleNavigate} />
        )}

        {currentView === 'library' && (
          <Library 
            onNavigate={handleNavigate} 
            onStartExam={handleStartExam} 
          />
        )}

        {currentView === 'exam-room' && (
          <ExamRoom onNavigate={handleNavigate} />
        )}

        {currentView === 'result' && (
          <ResultPage
            attemptId={selectedAttemptId}
            onNavigate={handleNavigate}
            onPracticeWrongQuestions={handlePracticeWrongQuestions}
          />
        )}

        {currentView === 'practice' && (
          <PracticeModes
            onStartCustomPractice={handleStartCustomPractice}
            onNavigate={handleNavigate}
            initialTopic={initialPracticeTopic}
          />
        )}

        {currentView === 'history' && (
          <HistoryPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Project Introduction First-time Welcome Modal */}
      <ProjectIntroModal
        isOpen={showIntroModal}
        onClose={handleDismissIntroModal}
        onExplore={handleExploreFromModal}
        onViewFullProject={handleViewFullProjectFromModal}
        onLoginDirect={() => {
          localStorage.setItem('hsa_intro_modal_seen', 'true');
          setShowIntroModal(false);
          openAuth('login', 'Chào mừng bạn đến với HSA MASTER! Vui lòng chọn tài khoản hoặc đăng ký để bắt đầu.');
        }}
      />

      {/* Authentication Login / Register Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        initialMode={authModal.mode}
        redirectMessage={authModal.message}
        onSuccess={() => {
          if (authModal.pendingAction) {
            authModal.pendingAction();
          }
        }}
      />

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ExamProvider>
          <AppContent />
        </ExamProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
