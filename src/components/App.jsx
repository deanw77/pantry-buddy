// Import Dependencies
import { Routes, Route } from "react-router-dom";

// Import Components
// Authentication Components
import AuthDetails from "./auth/AuthDetails";
import Welcome from "./auth/Welcome";
import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";

// Navigation Components
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

    </Routes>
  );
}

export default App;