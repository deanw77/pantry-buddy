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

// Primary Pages Components
import Dashboard from "./Dashboard";
import Home from "./primaryPages/Home";
import MyPantry from "./primaryPages/MyPantry";
import Recipes from "./primaryPages/Recipes";
import GroceryList from "./primaryPages/GroceryList";
import CarbonFootprint from "./primaryPages/CarbonFootprint";
import Profile from "./primaryPages/Profile";

// Import Widget Components
import RecipeCard from "./widgets/RecipeCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthDetails />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/sidenav" element ={<SideNav/>}/>
   
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />   
      <Route path="/mypantry" element={<MyPantry />} />
      <Route path="/recipes" element={<Recipes />} />  
      <Route path="/groceryList" element={<GroceryList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/carbonFootprint" element={<CarbonFootprint />} />

      <Route path="/recipe-card" element={<RecipeCard />} />  
    </Routes>
  );
}

export default App;