import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import cors from "cors"


const app = express()

const allowedOrigins = [
  "http://localhost:8080",
  "https://vishal-s-portfolio-six.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

import messageRoute from "./routes/userDetail.routes.js"
app.use("/api/v1/users", messageRoute);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app