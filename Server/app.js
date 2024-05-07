import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/auth.message.js";
import connectDB from "./db/connect.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



app.get('/', (req, res) => {
    res.send("Hello world");
});



app.listen(PORT, () =>{ 
    connectDB();
    console.log(`Server running on port ${PORT}`)
});