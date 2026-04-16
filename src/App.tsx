import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Instruments } from "./components/Instruments";
import { CapitalMovement } from "./components/CapitalMovement";
import { Ledger } from "./components/Ledger";
import { Advisory } from "./components/Advisory";
import { Settings } from "./components/Settings";
import { Auth as AuthPage } from "./components/Auth";
import { logActivity } from "./lib/audit";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        logActivity("LOGIN", `User ${u.email} authenticated via Google.`);
      }
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/liquidity" element={<CapitalMovement />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
