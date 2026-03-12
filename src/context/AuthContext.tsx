"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const LOCAL_STORAGE_KEY = "kodnest-academy-auth-user-v1";

const publicRoutes = new Set(["/auth/login", "/auth/signup", "/"]);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const stored = globalThis?.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const isPublicRoute = publicRoutes.has(pathname) || pathname.startsWith("/courses");

    if (!loading && !user && !isPublicRoute) {
      router.replace("/auth/login");
    }
  }, [loading, user, pathname, router]);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Please enter email and password.");
    }

    const stored = globalThis.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) {
      throw new Error("No account found. Please sign up first.");
    }

    const existing = JSON.parse(stored) as User;
    if (existing.email !== email) {
      throw new Error("Email does not match our records.");
    }

    setUser(existing);
  };

  const signup = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) {
      throw new Error("All fields are required.");
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
    };

    globalThis.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    globalThis.localStorage.removeItem(LOCAL_STORAGE_KEY);
    router.push("/");
  };

  const value: AuthContextValue = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};

