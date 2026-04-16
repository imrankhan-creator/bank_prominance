import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Landmark, ReceiptText, Wallet, ShieldCheck, Settings, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Sidebar: React.FC = () => {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Instruments", icon: Landmark, path: "/instruments" },
    { name: "Ledger", icon: ReceiptText, path: "/ledger" },
    { name: "Liquidity", icon: Wallet, path: "/liquidity" },
    { name: "Advisory", icon: ShieldCheck, path: "/advisory" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-muted/30 dark:bg-primary/10 flex flex-col py-8 px-4 z-50 border-r border-muted">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold tracking-tighter text-primary">Prominence</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Institutional Banking</p>
      </div>
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
          >
            {({ isActive }) => (
              <div className={cn(
                "flex items-center gap-3 px-3 py-2.5 transition-all duration-300 text-muted-foreground font-medium text-sm tracking-tight hover:bg-muted/50 hover:text-primary rounded-lg relative group",
                isActive && "text-primary font-bold bg-white/80 dark:bg-white/5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-muted/50"
              )}>
                <div className={cn(
                  "p-1.5 rounded-md transition-colors duration-300",
                  "group-hover:bg-primary/5"
                )}>
                  <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {item.name}
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-5 bg-primary rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-2">
        <button className="w-full bg-primary text-primary-foreground py-3 rounded text-xs font-bold uppercase tracking-widest active:scale-[0.98] duration-150 flex items-center justify-center gap-2">
          <Plus size={14} />
          New Transaction
        </button>
      </div>
    </aside>
  );
};
