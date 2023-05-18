import verifySession from "../util/verifySession.js"

export const getAllQuizzes = (req, res) => {
    const token = verifySession(req.cookies.session)
    if(!token) return res.clearCookie("session").status(401).json({message: "Session could not be authorized"})
       
    //TODO: look for user via email and return all quizzes
    const userEmail = token.email

    return  res.status(200).json({message: "Ok"})
}

export const createNewQuiz = (req, res) => {
    const token = verifySession(req.cookies.session)
    if(!token) return res.clearCookie("session").status(401).json({message: "Session could not be authorized"})
      

    // check it is a valid token
    // check the user exists
    // check the quiz has atleast 1 question
    // check that option questions have an answer
    
    return  res.status(200).json({message: "Ok"})
}