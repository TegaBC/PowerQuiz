import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

const saltRounds = 10

export const registerUser = async (req, res) => {
    const {name, email, password} = req.body
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Quick validations

    if (name.length < 3 || name.length > 50) {
        res.status(400).json({message: "Name does not reach requirements"})
        return
    }

    if (password.length < 8 || password.length > 128) {
        res.status(400).json({message: "Password does not reach requirements"})
        return
    }

    if (email.length > 50 || !emailRegex.test(email)) {
        res.status(400).json({message: "Email does not reach requirements"})
        return
    }

    // check a user does not already exist with this email
    try {
        const user = await userModel.findOne( {email: email} )
        if (user) {
            res.status(400).json({message: "An account with this email already exists"})
            return
        }
    } catch(err) {
        res.status(500).json({message: "Error creating user"})
    }

    // create hashed password
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create user
    try {
        await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        res.status(200).json({message: "User successfully created"})
    } catch(err) {
        res.status(500).json({message: "Error creating user"})
        console.log(err)
    }
}