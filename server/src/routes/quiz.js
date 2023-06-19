import express from "express";
import { createNewQuiz, getAllQuizzes } from "../controllers/quizController.js";

const quizRouter = express.Router() 

quizRouter.get("/", getAllQuizzes)
quizRouter.get("/fromId", getAllQuizzes)
quizRouter.post("/create", createNewQuiz)


export default quizRouter