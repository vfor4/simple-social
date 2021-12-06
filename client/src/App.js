import Home from './pages/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Profile from './pages/profile/Profile'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
