import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home"
import RegisterPage from "./pages/Register"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default App
