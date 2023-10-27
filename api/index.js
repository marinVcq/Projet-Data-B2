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


// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});