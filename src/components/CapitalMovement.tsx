import React from "react";
import { motion } from "framer-motion";
import { Landmark, Bitcoin, Building2, ChevronRight, ShieldCheck, ArrowRight, Shield } from "lucide-react";

export const CapitalMovement: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold tracking-tight text-primary">Capital Movement</h3>
        <p className="text-secondary text-sm">Initiate and monitor global liquidity transfers across fiat and digital asset classes.</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <section className="bg-card p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 inline-block">Transaction Entry</h4>
              <div className="flex bg-muted p-1 rounded">
                <button className="px-4 py-1.5 text-xs font-bold rounded bg-white shadow-sm text-primary transition-all">Fiat Wire</button>
                <button className="px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-all">Digital Assets</button>
              </div>
            </div>

            <form className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Receiving Institution / Beneficiary</label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground">
                    <Landmark size={18} />
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 border-none border-b-2 border-muted focus:border-primary bg-muted/30 transition-all text-sm outline-none"
                    placeholder="Select trusted beneficiary or enter IBAN/SWIFT"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Transfer Amount</label>
                  <div className="relative">
                    <input
                      className="w-full py-4 text-2xl font-medium tabular-nums bg-transparent border-none border-b-2 border-muted focus:border-primary transition-all px-0 focus:ring-0 outline-none"
                      type="text"
                      defaultValue="1,250,000.00"
                    />
                    <span className="absolute right-0 bottom-4 text-muted-foreground font-bold tracking-tight">USD</span>
                  </div>
                  <p className="text-[10px] text-secondary">Limit remaining: <span className="font-bold">$48.75M</span></p>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Execution Priority</label>
                  <select className="w-full py-4 bg-transparent border-none border-b-2 border-muted focus:border-primary transition-all px-0 focus:ring-0 text-sm font-medium outline-none">
                    <option>Standard T+1 Settlement</option>
                    <option>Instant (Express Wire)</option>
                    <option>Scheduled Settlement</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Internal Reference / Memo</label>
                <input
                  className="w-full py-2 bg-transparent border-none border-b-2 border-muted focus:border-primary transition-all px-0 focus:ring-0 text-sm outline-none"
                  placeholder="e.g. Q3 Portfolio Rebalancing - Institutional Fund B"
                  type="text"
                />
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Estimated Fees</span>
                  <span className="text-primary font-medium">$450.00 USD</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Conversion Rate</span>
                  <span className="text-primary font-medium">1.0000 (Local Settlement)</span>
                </div>
                <div className="pt-3 border-t border-muted-foreground/20 flex justify-between items-center">
                  <span className="text-sm font-bold">Total Debit</span>
                  <span className="text-lg font-bold tabular-nums">$1,250,450.00</span>
                </div>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-5 rounded font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-slate-800 transition-all">
                <ShieldCheck size={18} />
                Authorize Transaction
              </button>
            </form>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-8">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trusted Beneficiaries</h4>
              <button className="text-[10px] font-bold text-primary hover:underline">View Directory</button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "BlackRock Financial LLC", bank: "JPMORGAN CHASE BANK, NA • ••••4492", icon: Building2 },
                { name: "Cold Storage Ledger #04", bank: "ETH Mainnet • 0x82A...D932", icon: Bitcoin },
                { name: "UBS Luxembourg S.A.", bank: "UBSL LUX 22 • ••••8812", icon: Landmark },
              ].map((b, i) => (
                <div key={i} className="bg-card p-4 rounded border border-muted flex items-center gap-4 hover:border-muted-foreground transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <b.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-primary">{b.name}</p>
                    <p className="text-[10px] text-muted-foreground">{b.bank}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                </div>
              ))}
            </div>
          </section>

          <div className="p-6 bg-primary text-primary-foreground rounded-lg space-y-3 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Shield size={96} />
            </div>
            <h5 className="text-xs font-bold">Institutional Security Protocol</h5>
            <p className="text-[10px] text-white/60 leading-relaxed">All capital movements exceeding $5M require dual-authorization via hardware key. Ensure your executive token is synchronized.</p>
            <button className="text-[10px] font-bold text-accent flex items-center gap-1 hover:gap-2 transition-all">
              Manage Multi-Sig Controls <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
