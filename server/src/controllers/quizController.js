import verifySession from "../util/verifySession.js"
import quizModel from "../models/quizModel.js"

//finds all quizzes associated with the email and returns them to client
export const getAllQuizzes = async (req, res) => {
    const token = verifySession(req.cookies.session)
    if(!token) return res.clearCookie("session").status(401).json({message: "Session could not be authorized"})
       
    const quizzes = await quizModel.find({email: token.email})

    return res.status(200).json(quizzes)
}

//TODO: Create a new quiz after completing all checks
export const createNewQuiz = (req, res) => {
    const authHeaderToken = req.headers.authorization.split(" ")[1] // get token from auth header

    const token = verifySession(authHeaderToken)
    if(!token) return res.status(401).json({message: "Session could not be authorized"})

    const quiz = req.body
    const name = quiz.name
    const questions = quiz.questions

    if (!name || !questions || name === "") return res.status(400).json({message: "Quiz name or questions do not exist"})
    if (!Array.isArray(questions)) return res.status(400).json({message: "Questions post format is malformed"})

    for (const question of questions) {
        if (question.type == "option" && !question.answer && !question.answer == 0) { // Make sure that we have the correct answer, 0 is valid
            return res.status(400).json({message: "Question(s) are missing answers"})
        }
    }

    //TODO: save to database under the email of the user

    // if created successfully it should redirect to the page of the quiz
    console.log("Created quiz successfully")
    return  res.status(200).json({message: "Ok"})
}