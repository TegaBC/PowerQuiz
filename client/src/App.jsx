import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home"
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import DashboardPage from "./pages/Dashboard"
import CreateQuizPage from "./pages/CreateQuiz"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/quiz/create" element={<CreateQuizPage />}/>
      </Routes>
    </div>
  )
}

export default App
