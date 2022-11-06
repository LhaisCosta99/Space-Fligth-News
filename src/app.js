import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()
const app = express()
const port = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT || "DEV"
const user = process.env.USER_DB
const password = process.env.PASSWORD
const database = process.env.DATABASE

app.use(express.json())
app.use(cors())

try {
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.vqfs4id.mongodb.net/${database}?retryWrites=true&w=majority`)
    console.log("conectado ao mongo")
    app.listen(port, () => {
        if(environment === "PROD")  {
            console.log("Ambiente de produção.")
        }
        console.log(`http://localhost:${port}`)
    })
} catch (error) {
    console.log(error.message)
}