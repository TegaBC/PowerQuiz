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
})


/**
  
    QUESTIONS BODY EXAMPLE:
  
    {
        question: example?              // this is a multiple choice question
        options: [a, b, c, d, e, f]
        answer: a
    }

      {
        question: example? // this is a text answer question
        options: null
        answer: null
    }
 */

export default mongoose.model("quiz", quizSchema)