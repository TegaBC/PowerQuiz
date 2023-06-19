import mongoose from "mongoose"

const quizSchema = new mongoose.Schema({
    owner: { // email that is linked to the owner of the quiz
        type: String,
        required: true
      },
    name: {
        type: String,
        required: true
    },
    questions: {
        type: String,       // JSON format
        required: true,
    },
    responses: {
        type: String,       // JSON format
        required: true,
        default: "[]"
    }
})

/*
    QUESTIONS BODY EXAMPLE:
  
    {
        question: example?              // this is a multiple choice question
        options: [a, b, c, d, e, f]
        answer: 0
    }

    {
        question: example? // this is a text answer question
        options: null
        answer: null
    }
*/

/*
    Response Example:
  
    {
        name: "John"
        answers: ["Text answer", 2]

        >> Index of answer is the question, and for choice questions the answer will be stored as the index of the available choices
    }
*/

export default mongoose.model("quiz", quizSchema)