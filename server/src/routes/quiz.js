import express from "express";
import { createNewQuiz, deleteQuiz, getAllQuizzes, getQuizFromId, submitQuizResponse } from "../controllers/quizController.js";

const quizRouter = express.Router() 

quizRouter.get("/", getAllQuizzes)
quizRouter.get("/:id", getQuizFromId)
quizRouter.post("/create", createNewQuiz)
quizRouter.post("/submit", submitQuizResponse)
quizRouter.post("/delete", deleteQuiz)

export default quizRouter