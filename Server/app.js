import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/routes.js";
import connectDB from "./db/connect.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);



app.get('/', (req, res) => {
    res.send("Hello world");
});



app.listen(PORT, () =>{ 
    connectDB();
    console.log(`Server running on port ${PORT}`)
});