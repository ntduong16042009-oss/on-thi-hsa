import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { storage, DEFAULT_USER, TEACHER_USER } from '../services/storage';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (role?: UserRole, customName?: string, customEmail?: string) => void;
  loginWithUser: (user: User) => void;
  registerUser: (userData: { name: string; email: string; school?: string; role?: UserRole }) => User;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    return storage.getUser();
  });

  useEffect(() => {
    storage.setUser(user);
  }, [user]);

  const loginWithUser = (account: User) => {
    setUser(account);
    storage.setUser(account);
  };

  const registerUser = (userData: { name: string; email: string; school?: string; role?: UserRole }): User => {
    const newUser: User = {
      id: `user_${Date.now()}`,
      name: userData.name,
      email: userData.email,
      role: userData.role || 'student',
      targetScore: 90,
      school: userData.school || 'Trường THPT Yên Lãng'
    };
    storage.saveRegisteredAccount(newUser);
    loginWithUser(newUser);
    return newUser;
  };

  const login = (role: UserRole = 'student', customName?: string, customEmail?: string) => {
    let newUser: User;
    if (role === 'teacher') {
      newUser = { ...TEACHER_USER };
    } else {
      newUser = {
        ...DEFAULT_USER,
        name: customName || DEFAULT_USER.name,
        email: customEmail || DEFAULT_USER.email,
        role
      };
    }
    setUser(newUser);
    storage.setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    storage.setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    storage.setUser(updated);
  };

  const switchRole = (role: UserRole) => {
    if (role === 'teacher') {
      setUser(TEACHER_USER);
      storage.setUser(TEACHER_USER);
    } else {
      setUser({ ...DEFAULT_USER, role });
      storage.setUser({ ...DEFAULT_USER, role });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: false,
        login,
        loginWithUser,
        registerUser,
        logout,
        updateProfile,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
