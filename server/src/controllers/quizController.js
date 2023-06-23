import verifySession from "../util/verifySession.js"
import quizModel from "../models/quizModel.js"

//finds all quizzes associated with the email and returns them to client
export const getAllQuizzes = async (req, res) => {
    const authHeaderToken = req.headers.authorization?.split(" ")[1] // get token from auth header

    const token = verifySession(authHeaderToken)
    if(!token) return res.status(401).json({message: "Session could not be authorized"})
       
    const quizzes = await quizModel.find({owner: token.email})

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
            questions: questions
        })
        
        return res.status(200).json({message: "Quiz created."})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Internal server error occurred, please try again."})
    }
}

export const getQuizFromId = async (req, res) => {
    // Quizzes is an unauthorized endpoint, for ease of students.
    const quizId = req.params.id

    try {
        const requestedQuiz = await quizModel.findById(quizId)
        
        if (!requestedQuiz) { 
            return res.status(400).json({ message: "Could not find requested quiz"})
        } else {
            return res.status(200).json({ message: "Successful", quiz: requestedQuiz.questions, name: requestedQuiz.name})
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Server error whilst fetching quiz" })
    }
}

export const submitQuizResponse = async (req, res) => {
    // client should send a simple object, save directly to db. All fields are required except feedback.

    const answers = req.body.answers
    const name = req.body.name
    const feedback = req.body.feedback
    const id = req.body.id

    if (!name || !answers || !Array.isArray(answers)) {
        return res.status(400).json({ message: "Malformed quiz response (missing answers or name)" })
    } else {
        // Save to database
        try {
            const quiz = await quizModel.findById(id)
            const response =  {
                name: name,
                answers: answers,
                feedback: feedback,
            }
            const updatedResponseArray = [...quiz.responses, response]

            await quizModel.findByIdAndUpdate(id, {responses: updatedResponseArray})
            return res.status(200).json({ message: "Response received and saved"} )
        } catch (e) {
            return res.status(500).json({ message: "Internal server error"} )
        }
    }
}

export const deleteQuiz = async (req, res) => {
    // check that the user actually owns the quiz
    const id = req.body.id
    const authHeaderToken = req.headers.authorization?.split(" ")[1] // get token from auth header
    const token = verifySession(authHeaderToken)
    if(!token) return res.status(401).json({message: "Session could not be authorized"})

    try {
        const quiz = await quizModel.findById(id)
        
        if (quiz.owner === token.email) {
            await quizModel.findByIdAndDelete(id)
            return res.status(200).json( { message: "Deleted quiz" })
        } else {
            return res.status(401).json( { message: "Unauthorized deletion, delete failed." } )
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json( { message: "Server error occurred whilst attempting deletion." } )
    }
}