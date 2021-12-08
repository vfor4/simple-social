import Home from './pages/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Profile from './pages/profile/Profile'
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
