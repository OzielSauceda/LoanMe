import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`LoanMe API running on http://localhost:${PORT}`);
});