import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Mock Geopolitical Data API (Market Intelligence)
  app.get("/api/market-intelligence", (req, res) => {
    res.json({
      indices: [
        { name: "Geopolitical Volatility", value: 72.4, change: "+4.2%", status: "high" },
        { name: "Inflationary Drift", value: 31.8, change: "-0.5%", status: "stable" },
        { name: "Credit Spreads", value: "142bp", change: "+12bp", status: "rising" }
      ],
      signals: [
        { type: "BUY", asset: "Eurozone Sustainable Bonds", details: "Oversold condition reached on 200-day EMA." },
        { type: "WATCH", asset: "Brent Crude Futures", details: "OPEC+ announcement expected at 14:00 GMT." },
        { type: "EXIT", asset: "Frontier Market REITs", details: "Liquidity dry-up detected in peripheral zones." }
      ]
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
