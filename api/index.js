import express from "express";
import cookieParser from "cookie-parser";
import { createProxyMiddleware } from "http-proxy-middleware";

// import routes
import laboRoutes from "./routes/labos.js";
import authRoutes from "./routes/auth.js";
import employeeRoutes from "./routes/employees.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Add middleware to set up CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
app.use(cookieParser());
app.use("/api/labos", laboRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// Add the proxy middleware for '/api' requests
app.use("/api", createProxyMiddleware({
target: 'https://fortunato-api.onrender.com',
changeOrigin: true,
}));


app.listen(process.env.DB_PORT, () => {
  console.log("connected");
});
