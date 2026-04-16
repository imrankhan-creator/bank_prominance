import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Verified, RefreshCw } from "lucide-react";

export const Instruments: React.FC = () => {
  const instruments = [
    { id: "PRM-8892-01", type: "SBLC-MT760", name: "Standby Letter of Credit", amount: "100,000,000.00", currency: "EUR", status: "VALID", color: "border-accent" },
    { id: "PRM-9102-44", type: "BG-MT760", name: "Bank Guarantee (Performance)", amount: "25,000,000.00", currency: "USD", status: "PENDING", color: "border-muted" },
    { id: "PRM-0021-TX", type: "KTT-TELEX", name: "Key Tested Telex Transfer", amount: "123,500,000.00", currency: "USD", status: "IN TRANSIT", color: "border-primary", active: true },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-medium tracking-tight text-primary">Active Portfolio</h3>
          <p className="text-sm text-muted-foreground mt-1">Real-time status of non-depository instruments</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Total Exposure</p>
            <p className="text-xl font-bold tabular-nums">USD 248,500,000.00</p>
          </div>
          <div className="text-right border-l border-muted pl-4">
            <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Active Instruments</p>
            <p className="text-xl font-bold tabular-nums">12</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-5 space-y-4">
          {instruments.map((inst) => (
            <motion.div
              key={inst.id}
              whileHover={{ scale: 1.02 }}
              className={`p-5 rounded-lg border-l-4 shadow-sm cursor-pointer transition-all ${
                inst.active ? "bg-primary text-primary-foreground border-white scale-[1.02] shadow-lg" : "bg-card border-muted"
              } ${inst.color}`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                  inst.active ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}>{inst.type}</span>
                <span className={`text-xs font-mono ${inst.active ? "text-white/40" : "text-muted-foreground"}`}>#{inst.id}</span>
              </div>
              <h4 className="text-sm font-bold">{inst.name}</h4>
              <div className="mt-4 flex justify-between items-baseline">
                <p className="text-xl font-bold tabular-nums">
                  {inst.amount} <span className={`text-xs ${inst.active ? "text-white/60" : "text-muted-foreground"}`}>{inst.currency}</span>
                </p>
                <span className={`text-[10px] flex items-center gap-1 font-bold ${inst.active ? "text-white" : "text-secondary"}`}>
                  {inst.status === "VALID" ? <Verified size={14} /> : <RefreshCw size={14} className="animate-spin" />}
                  {inst.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-7 bg-card rounded-lg overflow-hidden shadow-xl border border-muted">
          <div className="bg-muted/30 border-b border-muted px-8 py-6 flex justify-between items-center">
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Instrument Detail View</p>
              <h3 className="text-xl font-bold text-primary tracking-tight">KTT / MT-103 Direct Cash Transfer</h3>
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-muted px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-muted transition-colors">Download PDF</button>
              <button className="bg-white border border-muted px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-muted transition-colors">Audit Trail</button>
            </div>
          </div>
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Transaction Ref</label>
                <p className="font-mono text-sm mt-1">TX-99021-2291-KTT</p>
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Status</label>
                <p className="text-sm mt-1 flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Awaiting Server ACK
                </p>
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Estimated Settlement</label>
                <p className="text-sm mt-1 font-semibold tabular-nums">2024-05-24 16:00 GMT</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Official KTT Message Body</label>
                <span className="text-[10px] font-mono text-muted-foreground">ISO 20022 COMPLIANT</span>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-6 font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre">
{`:70: /INV/REMITTANCE PER CONTRACT NO. PRM-2291-ALPHA
:71A: /OUR/
:72: /BNK/INSTITUTIONAL CLEARANCE REQUIRED
/FIELD 1: {1:F01PROMNCEBAAXXX0000000000}
/FIELD 2: {2:I103BANKUS33XXXXN}
/FIELD 3: {4:
:20: PRM-0021-TX-REF
:23B: CRED
:32A: 240522USD123500000,00
:50K: /ACC/9922817263
      PROMINENCE GLOBAL VENTURES
      SUITE 404, FINANCIAL PLAZA
      GRAND CAYMAN, KY
:59: /ACC/1102938475
      ALPHA STRATEGIC HOLDINGS LTD
:71A: SHA
-}`}</div>
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-muted-foreground block mb-4">Transmission Log</label>
              <div className="space-y-4">
                {[
                  { title: "Instruction Received", time: "09:12:04", desc: "Authenticated via Secure Portal Client Key 0449.", done: true },
                  { title: "Compliance Screening Complete", time: "10:45:22", desc: "Passed automated AML/KYC and sanction check protocols.", done: true },
                  { title: "Initiating KTT Transmission", time: "14:00:00", desc: "Generating message hash and testing server connectivity.", done: false },
                ].map((log, i) => (
                  <div key={i} className="flex gap-4 items-start relative">
                    {i < 2 && <div className="w-0.5 h-full absolute left-[11px] top-4 bg-muted" />}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center relative z-10 ${log.done ? "bg-muted" : "bg-secondary-container"}`}>
                      {log.done ? <Verified size={14} className="text-muted-foreground" /> : <RefreshCw size={14} className="text-secondary animate-spin" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className={`text-sm font-bold ${log.done ? "text-foreground" : "text-secondary"}`}>{log.title}</p>
                        <span className="text-[10px] font-mono text-muted-foreground">{log.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{log.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
