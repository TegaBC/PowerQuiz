import jwt from "jsonwebtoken"

export const getAllQuizzes = (req, res) => {
    const session = req.cookies.session
    if (!session) {
        return res.status(401).json({message: "Client does not have required cookie."})
    }

    let token

    try {
        // this will check the token is valid, will also check that it is not expired and will return content in payload
        token = jwt.verify(session, process.env.TOKEN_KEY) 
    } catch(err) {
       
        if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError") {
            return res.clearCookie("session").status(401).json(err.message).redirect(`${process.env.CLIENT_ADDRESS}/login`)
        }

        console.log(err)
        return res.clearCookie("session").status(500).json({message: "A server error has occurred."})
    }
       
    // return quizzes
    const userEmail = token.email
    

    return  res.status(200).json({message: "Ok"})

}