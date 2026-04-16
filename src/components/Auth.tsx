import React from "react";
import { auth, googleProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const Auth: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        alert("Please allow popups for this site to authenticate.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.log("Popup request was cancelled by a newer request.");
      } else {
        console.error("Login failed:", error);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card p-12 rounded-lg shadow-2xl max-w-md w-full text-center relative z-10 border border-muted"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-xl shadow-lg">
            <ShieldCheck size={32} className="text-accent" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tighter text-primary mb-2">Prominence</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold mb-8">Institutional Banking Portal</p>
        
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Access restricted to authorized institutional personnel. Multi-factor authentication required for all sessions.
          </p>
          
          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full bg-primary text-primary-foreground py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoggingIn ? "Authenticating..." : "Authenticate with Google"}
          </button>
          
          <div className="pt-8 border-t border-muted">
            <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Secure Gateway Active
            </div>
          </div>
        </div>
      </motion.div>
      
      <footer className="absolute bottom-8 text-center w-full">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
          © 2024 Prominence Bank N.A. Member FDIC.
        </p>
      </footer>
    </div>
  );
};
