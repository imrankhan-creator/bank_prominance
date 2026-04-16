import React from "react";
import { Download, FileDown, ChevronLeft, ChevronRight, TrendingUp, ArrowRight } from "lucide-react";

export const Ledger: React.FC = () => {
  const transactions = [
    { date: "May 28, 2022", ref: "TRX-99201-B2", desc: "Standard Chartered Settlement", sub: "Institutional Sweep • Automated Clearing", credit: "840,000.00", debit: "—", balance: "12,749,181.12" },
    { date: "May 24, 2022", ref: "TRX-88129-C5", desc: "Oracle Corp - Quarterly Dividend Distribution", sub: "Equity Position Asset ID: 2991-A", credit: "1,270,400.00", debit: "—", balance: "11,909,181.12" },
    { date: "May 20, 2022", ref: "TRX-77012-K9", desc: "Vanguard Real Estate Fund Reinvestment", sub: "Capital Call Fulfillment", credit: "—", debit: "1,500,000.00", balance: "10,638,781.12" },
    { date: "May 15, 2022", ref: "TRX-66100-M1", desc: "Monthly Operational Disbursement", sub: "Payroll & Facility Management", credit: "—", debit: "344,120.32", balance: "12,138,781.12" },
    { date: "May 01, 2022", ref: "TRX-00001-A1", desc: "Opening Balance Balance Forward", sub: "Previous Statement Period Closing", credit: "—", debit: "—", balance: "12,482,901.44" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Portfolio Account • 8829-XJ-01</p>
          <h3 className="text-2xl font-semibold text-primary">Master Operating Ledger</h3>
          <p className="text-sm text-muted-foreground">Period: May 01, 2022 — May 31, 2022</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-muted text-primary text-xs font-semibold rounded hover:bg-muted-foreground/10 transition-colors">
            <FileDown size={16} />
            CSV EXPORT
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded hover:opacity-95 transition-opacity">
            <Download size={16} />
            DOWNLOAD PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: "Opening Balance", value: "$12,482,901.44", color: "border-primary" },
          { label: "Total Inbound", value: "+$2,110,400.00", color: "border-secondary" },
          { label: "Total Outbound", value: "-$1,844,120.32", color: "border-muted" },
          { label: "Current Ledger Balance", value: "$12,749,181.12", color: "border-accent" },
        ].map((stat, i) => (
          <div key={i} className={`bg-card p-6 rounded-lg border-l-4 shadow-sm ${stat.color}`}>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-2">{stat.label}</p>
            <p className="text-xl font-medium tabular-nums text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-muted">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 border-b border-muted">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Date</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Reference ID</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Description</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-right">Credits (USD)</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-right">Debits (USD)</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-right">Balance (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted/50">
              {transactions.map((tx, i) => (
                <tr key={i} className="hover:bg-muted/20 transition-colors group">
                  <td className="px-6 py-5 text-sm text-muted-foreground tabular-nums">{tx.date}</td>
                  <td className="px-6 py-5 text-sm font-medium text-primary tracking-tight">{tx.ref}</td>
                  <td className="px-6 py-5 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-primary">{tx.desc}</span>
                      <span className="text-[11px] text-muted-foreground">{tx.sub}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-secondary font-medium tabular-nums text-right">{tx.credit}</td>
                  <td className="px-6 py-5 text-sm text-red-500 tabular-nums text-right">{tx.debit}</td>
                  <td className="px-6 py-5 text-sm font-semibold text-primary tabular-nums text-right">{tx.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-muted/30 border-t border-muted flex justify-between items-center">
          <span className="text-[11px] text-muted-foreground font-medium uppercase">Showing 1-5 of 42 transactions</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-muted text-muted-foreground hover:bg-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-muted text-muted-foreground hover:bg-white text-xs">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-muted text-muted-foreground hover:bg-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/30 rounded-lg p-6 border border-muted">
          <h4 className="text-sm font-bold text-primary mb-4 flex items-center gap-2">
            <TrendingUp size={18} />
            TRANSACTION VELOCITY
          </h4>
          <div className="h-48 flex items-end justify-between gap-2 px-4">
            {[40, 65, 90, 55, 45, 70, 35].map((h, i) => (
              <div key={i} className={`w-full rounded-t-sm transition-all ${i === 2 ? "bg-primary" : "bg-muted-foreground/30"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
            <span>WEEK 1</span>
            <span>WEEK 2</span>
            <span>WEEK 3</span>
            <span>WEEK 4</span>
          </div>
        </div>
        <div className="bg-muted/30 rounded-lg p-6 border border-muted flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-muted-foreground">Pending Approvals</span>
              <span className="text-xs font-bold text-primary tabular-nums">02</span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div className="bg-accent h-full w-1/3" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-muted-foreground">Unreconciled Items</span>
              <span className="text-xs font-bold text-primary tabular-nums">00</span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-0" />
            </div>
            <div className="pt-4">
              <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:underline">
                View Reconciliation Report
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
