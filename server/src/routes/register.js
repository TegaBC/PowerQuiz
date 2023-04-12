import express from "express"
import { registerUser } from "../controllers/registerController.js"

const registerRouter = express.Router()

// top level directory is /register
registerRouter.post("/", registerUser)

export default registerRouter