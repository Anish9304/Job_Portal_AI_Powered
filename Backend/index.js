import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

dotenv.config();

const app = express();

// -------------------- Logs --------------------
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("CORS_ORIGIN:", process.env.CORS_ORIGIN);

// -------------------- Middleware --------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://job-portal-ai-powered-red.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Incoming Origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

const PORT = process.env.PORT || 5001;

// -------------------- Routes --------------------
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

// -------------------- Deployment --------------------
// Agar future me frontend bhi Render se serve karna ho to is code ko uncomment kar sakte ho
/*
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();

  app.use(express.static(path.join(dirPath, "Frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(dirPath, "Frontend", "dist", "index.html"));
  });
}
*/

// -------------------- Start Server --------------------
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});