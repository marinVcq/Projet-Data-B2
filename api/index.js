import express from "express"
import cookieParser from "cookie-parser"

// import routes
import laboRoutes from "./routes/labos.js"
import authRoutes from "./routes/auth.js"
import employeeRoutes from "./routes/employees.js"

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/labos",laboRoutes );
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);


app.listen(process.env.PORT, () => {
    console.log("connected");
});