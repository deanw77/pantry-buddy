// Import Dependencies
import { Routes, Route } from "react-router-dom";

// Import Components
import Dashboard from "./auth/Dashboard";
import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import Profile from "./Profile";
import UserData from "./UserData";
import AuthDetails from "./auth/AuthDetails";
import ForgotPassword from "./auth/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthDetails />} />
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/userdata" element={<UserData />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;