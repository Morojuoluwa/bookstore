import express from "express"
import "dotenv/config"
import authRoutes from "./routes/authRoutes.js"
import { connectDB } from "./lib/db.js";
import bookroutes from "./routes/bookroutes.js"


const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/books", bookroutes)
app.listen(PORT, ()=>{
    console.log("this server dey actuallyh run")
    connectDB()
})