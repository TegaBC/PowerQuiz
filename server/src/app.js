import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()
const port = process.env.PORT || 5050

app.use(cors)

app.listen(port, () => {
    console.log("Server is listening on port " + port)
})