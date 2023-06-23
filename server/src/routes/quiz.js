import express from "express";
import { createNewQuiz, getAllQuizzes, getQuizFromId, submitQuizResponse } from "../controllers/quizController.js";

const quizRouter = express.Router() 

quizRouter.get("/", getAllQuizzes)
quizRouter.get("/:id", getQuizFromId)
quizRouter.post("/create", createNewQuiz)
quizRouter.post("/submit", submitQuizResponse)

export default quizRouter