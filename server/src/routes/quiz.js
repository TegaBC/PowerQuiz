import express from "express";
import { getAllQuizzes } from "../controllers/quizController.js";

const quizRouter = express.Router()

quizRouter.get("/", getAllQuizzes)

export default quizRouter