import React from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdmPage from './pages/AdmPage';
import Games from "./components/games/Games";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/admPage" element={<AdmPage/>} />
          <Route path="/games" element={<Games/>} />
        </Routes>
    </Router>
  );
}

export default App;
