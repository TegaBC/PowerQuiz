import verifySession from "../util/verifySession.js"
import quizModel from "../models/quizModel.js"

//finds all quizzes associated with the email and returns them to client
export const getAllQuizzes = async (req, res) => {
    const authHeaderToken = req.headers.authorization?.split(" ")[1] // get token from auth header

    const token = verifySession(authHeaderToken)
    if(!token) return res.status(401).json({message: "Session could not be authorized"})
       
    const quizzes = await quizModel.find({owner: token.email})
    console.log(quizzes)

    return res.status(200).json(quizzes)
}

export const createNewQuiz = async (req, res) => {
    const authHeaderToken = req.headers.authorization?.split(" ")[1] // get token from auth header

    const token = verifySession(authHeaderToken)
    if(!token) return res.status(401).json({message: "Session could not be authorized"})

    const quiz = req.body
    const name = quiz.name
    const questions = quiz.questions

    if (!name || !questions || name === "") return res.status(400).json({message: "Quiz name or questions do not exist"})
    if (!Array.isArray(questions) || questions.length == 0) return res.status(400).json({message: "Questions post format is malformed or has no quiz has no questions"})

    for (const question of questions) {
        if (question.type == "option" && !question.answer && !question.answer == 0) { // Make sure that we have the correct answer, 0 is valid
            return res.status(400).json({message: "Question(s) are missing answers"})
        }
    }

    try {
        await quizModel.create({
            owner: token.email,
            name: name,
            questions: JSON.stringify(questions)
        })
        
        return res.status(200).json({message: "Quiz created."})
    } catch (err) {
        return res.status(500).json({message: "Internal server error occurred, please try again."})
    }
}

export const getQuizFromId = async (req, res) => {
    // Quizzes is an unauthorized endpoint, for ease of students.
    const quizId = req.body.id

    try {
        const requestedQuiz = await quizModel.findById(quizId)
        
        if (!requestedQuiz) { 
            return req.status(400).json({ message: "Could not find requested quiz"})
        } else {
            const quizObject = JSON.parse(requestedQuiz)
            delete quizObject.owner
            return req.status(200).json({ message: "Successful", quiz: quizObject })
        }

    } catch (err) {
        console.log()
        return req.status(500).json({ message: "Server error whilst fetching quiz" })
    }
}