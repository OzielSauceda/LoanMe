import express from "express";
import { loans } from "./data/loans.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/api/loans", (_req, res) => {
  res.json(loans);
});

app.listen(PORT, () => {
  console.log(`LoanMe API running on http://localhost:${PORT}`);
});