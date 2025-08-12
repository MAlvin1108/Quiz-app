import React from 'react';
import Quiz from './Components/quiz/Quiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginform from './Components/LoginForm/Loginform'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
    </Router>
  )
}

export default App;
