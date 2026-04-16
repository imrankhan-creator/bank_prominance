import React from "react";
import { Settings as SettingsIcon, Shield, Bell, User, Globe, Lock } from "lucide-react";

export const Settings: React.FC = () => {
  const sections = [
    { name: "Account Profile", icon: User, desc: "Manage your institutional identity and credentials" },
    { name: "Security & MFA", icon: Shield, desc: "Configure multi-factor authentication and biometric locks" },
    { name: "Notification Matrix", icon: Bell, desc: "Set thresholds for real-time transaction alerts" },
    { name: "Regional Compliance", icon: Globe, desc: "Manage jurisdictional reporting and tax residency" },
    { name: "API & Integrations", icon: Lock, desc: "Securely connect your ERP and treasury systems" },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <header>
        <h2 className="text-2xl font-bold tracking-tight text-primary">System Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Configure your institutional banking environment</p>
      </header>

      <div className="bg-card rounded-xl border border-muted shadow-sm overflow-hidden">
        <div className="divide-y divide-muted">
          {sections.map((section, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <section.icon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{section.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{section.desc}</p>
                </div>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                Configure
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl p-6">
        <h4 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">Danger Zone</h4>
        <p className="text-xs text-red-500/80 mb-4">Actions here are irreversible and may impact institutional access.</p>
        <button className="px-4 py-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-colors">
          Revoke All Access Tokens
        </button>
      </div>
    </div>
  );
};
