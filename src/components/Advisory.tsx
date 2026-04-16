import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, TrendingUp, FileText, Lock, Eye } from "lucide-react";

export const Advisory: React.FC = () => {
  const reports = [
    { title: "Q2 Geopolitical Risk Assessment", date: "May 20, 2024", type: "CONFIDENTIAL", status: "New" },
    { title: "Eurozone Liquidity Drift Analysis", date: "May 15, 2024", type: "RESTRICTED", status: "Read" },
    { title: "Institutional Crypto Exposure Policy", date: "May 10, 2024", type: "INTERNAL", status: "Read" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold tracking-tight text-primary">Strategic Advisory</h2>
        <p className="text-muted-foreground text-sm mt-1">Intelligence-driven insights for institutional capital</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="bg-card rounded-xl border border-muted shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-muted flex justify-between items-center bg-muted/10">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Intelligence Reports</h3>
              <button className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline">Request Custom Analysis</button>
            </div>
            <div className="divide-y divide-muted">
              {reports.map((report, i) => (
                <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-muted/5 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">{report.title}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{report.date} • {report.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {report.status === 'New' && (
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    )}
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                      <Eye size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex gap-8 items-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={40} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Institutional Guardrail Active</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Your portfolio is currently protected by our proprietary algorithmic hedging. 
                  Geopolitical volatility in the Eastern sector has triggered a 15% shift to 
                  sovereign-backed instruments.
                </p>
                <button className="mt-4 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
                  Review Hedging Strategy →
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-muted/30 rounded-xl p-6 border border-muted">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
              <AlertTriangle size={16} className="text-accent" />
              Risk Alerts
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-white/50 dark:bg-white/5 rounded border border-accent/20">
                <p className="text-xs font-bold text-primary mb-1">Currency Volatility</p>
                <p className="text-[10px] text-muted-foreground">EUR/USD spread widening beyond 12bp threshold.</p>
              </div>
              <div className="p-3 bg-white/50 dark:bg-white/5 rounded border border-muted">
                <p className="text-xs font-bold text-primary mb-1">Liquidity Warning</p>
                <p className="text-[10px] text-muted-foreground">Secondary market for MT-760 instruments tightening.</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-muted shadow-sm">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Market Sentiment</h3>
            <div className="space-y-6">
              {[
                { label: "Institutional Confidence", value: 82, color: "bg-secondary" },
                { label: "Market Volatility", value: 45, color: "bg-accent" },
                { label: "Capital Outflow Risk", value: 12, color: "bg-primary" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-primary">{item.value}%</span>
                  </div>
                  <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full ${item.color}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
