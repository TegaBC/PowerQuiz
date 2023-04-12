import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

const saltRounds = 10

export const registerUser = async (req, res) => {
    const {name, email, password} = req.body
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Quick validations

    if (name.length < 3 || name.length > 50) {
        res.status(400).send("Name does not reach requirements")
    }

    if (password.length < 8 || password.length > 128) {
        res.status(400).send("Password does not reach requirements")
    }

    if (email.length > 50 || !emailRegex.test(email)) {
        res.status(400).send("Email does not reach requirements")
    }

    // create hashed password
    const hashedPassword = bcrypt.hash(password, saltRounds)

    // Create user
    try {
        await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        res.status(200).send("User successfully created")
    } catch(err) {
        res.status(500).send("Error creating user")
        console.log(err)
    }
}