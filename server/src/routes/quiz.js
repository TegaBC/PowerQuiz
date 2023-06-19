import express from "express";
import { createNewQuiz, getAllQuizzes, getQuizFromId } from "../controllers/quizController.js";

const quizRouter = express.Router() 

quizRouter.get("/", getAllQuizzes)
quizRouter.get("/:id", getQuizFromId)
quizRouter.post("/create", createNewQuiz)


export default quizRouter