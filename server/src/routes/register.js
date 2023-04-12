import express from "express"
import { registerUser } from "../controllers/registerController"

const registerRouter = express.Router()

// top level directory is /register
registerRouter.post("/", registerUser)

export default registerRouter