import { useState } from "react";

import SideNav, { SidebarItem } from "./nav/SideNav.jsx";
import Footer from "./nav/Footer.jsx";

import Home from "./primaryPages/Home.jsx";
import Profile from "./primaryPages/Profile.jsx";
import MyPantry from "./primaryPages/MyPantry.jsx";
import CarbonFootprint from "./primaryPages/CarbonFootprint.jsx";
import Recipes from "./primaryPages/Recipes.jsx";
import GroceryList from "./primaryPages/GroceryList.jsx";

//import the needed icons from lucide react
import {
  CookingPot,
  ClipboardList,
  LayoutGrid,
  Sandwich,
  CircleUserRound,
  Leaf,
} from "lucide-react";


export default function UserData() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className="flex w-full pageContent">
        <SideNav>
          <a className="text-left" onClick={() => setActive("Home")}>
            <SidebarItem icon={<LayoutGrid size={20} />} text="Home" />
          </a>
          <a className="text-left" onClick={() => setActive("MyPantry")}>
            <SidebarItem icon={<Sandwich size={20} />} text="My Pantry" />
          </a>
          <a className="text-left" onClick={() => setActive("Recipes")}>
            <SidebarItem icon={<CookingPot size={20} />} text="Recipes"/>
          </a>
          <a className="text-left" onClick={() => setActive("GroceryList")}>
            <SidebarItem icon={<ClipboardList size={20} />} text="Grocery List" />
          </a>
          <a className="text-left" onClick={() => setActive("CarbonFootprint")}>
            <SidebarItem icon={<Leaf size={20} />} text="Carbon Footprint" />
          </a>
          <a className="text-left" onClick={() => setActive("Profile")}>
            <SidebarItem icon={<CircleUserRound size={20} />} text="Account Settings" />
          </a>
        </SideNav>

        <div className="w-full pageContent">
          {active === "Home" && <Home title="Home" />}
          {active === "Profile" && <Profile title="Profile" />}
          {active === "MyPantry" && <MyPantry title="MyPantry" />}
          {active === "CarbonFootprint" && <CarbonFootprint title="CarbonFootprint" />}
          {active === "Recipes" && <Recipes title="Recipes" />}
          {active === "GroceryList" && <GroceryList title="GroceryList" />}
          
          <Footer />
        </div>
      </div>
    </>
  );
}