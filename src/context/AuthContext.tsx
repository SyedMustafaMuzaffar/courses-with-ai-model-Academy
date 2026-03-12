"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
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
      try {
        setUser(JSON.parse(stored));
      } catch (err) {
        console.error("Auth: Error parsing stored user", err);
        globalThis?.localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Wait for initial load
    if (loading) return;

    const isPublicRoute = publicRoutes.has(pathname);

    if (!user && !isPublicRoute) {
      router.replace("/auth/login");
    }
  }, [loading, user, pathname, router]);

  const login = useCallback(async (email: string, password: string) => {
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
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    if (!name || !email || !password) {
      throw new Error("All fields are required.");
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
    };

    globalThis.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUser));
    // No setUser here as per new flow
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    globalThis.localStorage.removeItem(LOCAL_STORAGE_KEY);
    router.push("/");
  }, [router]);

  const value = useMemo(() => ({
    user,
    loading,
    login,
    signup,
    logout,
  }), [user, loading, login, signup, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};
