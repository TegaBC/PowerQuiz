// Dependencies
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

// Routers
import registerRouter from "./routes/register.js"

// Setup env, and express
dotenv.config()

const app = express()
const port = process.env.PORT || 5050

// middleware
app.use(cors)
app.use(express.json())

// routes
app.use("/register", registerRouter)

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to mongo DB successfully"))
    .catch(err => console.log(err));

// start
app.listen(port, () => {
    console.log("Server is listening on port " + port)
})