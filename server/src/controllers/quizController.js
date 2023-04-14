import jwt from "jsonwebtoken"

export const getAllQuizzes = (req, res) => {
    const session = req.cookies.session
    if (!session) {
        return res.status(401).json("Client does not have required cookie.")
    }

    try {
        const verifiedToken = jwt.verify(session, process.env.TOKEN_KEY) 
        // this will check the token is valid, will also check that it is not expired and will return content in payload
        console.log(verifiedToken)
    } catch(err) {
        if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
            return res.clearCookie("session").status(401).json(err.message).redirect(`${process.env.CLIENT_ADDRESS}/login`)
        }

        console.log(err)
        return res.clearCookie("session").status(500).json("A server error has occurred.")
    }
    
    // return quizzes

    res.status(200).json("Ok")
}