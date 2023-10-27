import express from "express";
import cookieParser from "cookie-parser";

// import routes
import laboRoutes from "./routes/labos.js";
import authRoutes from "./routes/auth.js";
import employeeRoutes from "./routes/employees.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/labos", laboRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

const server = app.listen(process.env.DB_PORT, () => {
    console.log("Server connected");
    console.log(`Server is running on port ${process.env.DB_PORT}`);
});

// Log the port every 10 seconds
setInterval(() => {
    console.log(`Server is still running on port ${process.env.DB_PORT}`);
}, 10000);

// Handle process termination to log a message before exiting
process.on('SIGINT', () => {
    console.log('Server is shutting down...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
