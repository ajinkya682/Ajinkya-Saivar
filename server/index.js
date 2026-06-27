require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const { connectDB } = require("./db");
const { startEmailWorker } = require("./queue/emailWorker");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ──────────────────────────────────────────────
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Rate limiting: max 5 requests per 15 minutes per IP for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many contact requests from this IP. Please try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── Routes ─────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/contact", contactLimiter, contactRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ─── Bootstrap ───────────────────────────────────────────────
async function bootstrap() {
  // 1. Connect to MongoDB
  await connectDB();

  // 2. Start the BullMQ email worker (background processor)
  startEmailWorker();

  // 3. Start the HTTP server
  app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio API server running at http://localhost:${PORT}`);
    console.log(`🗄️  Database: MongoDB Atlas`);
    console.log(`⚙️  Queue: BullMQ (Redis / Upstash)`);
    console.log(`🔒 Rate limiting: 5 requests / 15 minutes per IP\n`);
  });
}

bootstrap();
