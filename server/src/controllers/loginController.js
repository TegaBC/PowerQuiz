// libs
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// models
import userModel from "../models/userModel.js"

export const loginUser = async (req, res) => {
    const { password, email } = req.body

    // check on user and password
    const user = await userModel.findOne({ email: email })
    if (!user) return res.status(401).json("User with provided email does not exist")

    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) return res.status(401).json("Incorrect credentials") 

    // generate jwt token, remove password so it doesn't get sent in the string
    delete user.password
    const token = jwt.sign(user, process.env.TOKEN_KEY, { expiresIn: "5m" })

    res.cookie("session", token, {
        httpOnly: true,
        secure: true,
    }).status("200").json("Logged in.")
}