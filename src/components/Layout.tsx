import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { MarketIntelligence } from "./MarketIntelligence";
import { motion } from "framer-motion";
import { Bell, HelpCircle, LogOut, Search, ShieldCheck, Clock, Activity } from "lucide-react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 h-16 px-8 flex justify-between items-center glass-panel border-b border-muted">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-primary">Institutional Ledger</h2>
            <div className="h-4 w-px bg-muted-foreground/20" />
            <div className="relative group">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search instruments..."
                className="bg-muted border-none rounded-lg pl-10 pr-4 py-1.5 text-xs w-64 focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5 border-r border-muted pr-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={14} />
                <span className="text-[10px] font-mono font-bold">{time}</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
              </div>
              <button className="text-muted-foreground hover:text-primary transition-colors relative">
                <Bell size={18} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full border-2 border-background" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <HelpCircle size={18} />
              </button>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="text-right">
                <p className="text-xs font-bold text-primary group-hover:text-accent transition-colors">Secure Logout</p>
                <div className="flex items-center gap-1 justify-end">
                  <Activity size={10} className="text-green-500 animate-pulse" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Session Active</p>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-muted border border-muted-foreground/20 overflow-hidden ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                <img src="https://picsum.photos/seed/executive/100/100" alt="User" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </header>
        <div className="p-8 flex-1 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
        <footer className="border-t border-muted bg-muted/50 py-6 px-8 flex justify-between items-center mt-auto">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            © 2024 Prominence Bank N.A. Member FDIC. Institutional Division.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] uppercase tracking-widest text-muted-foreground hover:underline">Privacy Policy</a>
            <a href="#" className="text-[11px] uppercase tracking-widest text-muted-foreground hover:underline">Terms of Service</a>
            <a href="#" className="text-[11px] uppercase tracking-widest text-muted-foreground hover:underline">Regulatory Disclosures</a>
          </div>
        </footer>
      </main>
      <MarketIntelligence />
    </div>
  );
};
