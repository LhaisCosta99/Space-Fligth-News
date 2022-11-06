import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});