import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { MainShell } from "@/components/layout/MainShell";
import ChatAssistant from "@/components/ChatAssistant";

export const metadata: Metadata = {
  title: "SkillNest Academy",
  description: "Learn without limits at SkillNest Academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-slate-950"
        suppressHydrationWarning
      >
        <AuthProvider>
          <MainShell>{children}</MainShell>
          <ChatAssistant />
        </AuthProvider>
      </body>
    </html>
  );
}
