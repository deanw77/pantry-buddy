// Import Dependencies
import { Routes, Route } from "react-router-dom";

// Import Components
import Welcome from "./auth/Welcome";
import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import Profile from "./widgets/Profile";
import Dashboard from "./Dashboard";
import AuthDetails from "./auth/AuthDetails";
import ForgotPassword from "./auth/ForgotPassword";
import SideNav from "./nav/SideNav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthDetails />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/sidenav" element ={<SideNav/>}/>

      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />   
    </Routes>
  );
}

export default App;