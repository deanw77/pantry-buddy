// Imports Displayed on All Pages
import SideNav, { SidebarItem } from "./nav/SideNav";
import Footer from "./nav/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

import TestWidget from "./widgets/TestWidget";
import Profile from "./widgets/Profile.jsx";

//import the needed icons from lucide react
import {
    CookingPot,
    ClipboardList,
    LayoutGrid,
    Sandwich,
    CircleUserRound,
    Leaf,
  } from "lucide-react";

//Widgets for this page specifically
import GetRecipeCTA from "./widgets/GetRecipeCTA";

export default function MyPantry() {
    const [active, setActive] = useState("TestWidget");

    return (
        <>
       <div className="flex">
       <SideNav>
          <button className="text-left" onClick={() => setActive("TestWidget")}>
            <SidebarItem
              icon={<LayoutGrid size={20} />}
              text="Dashboard"
            />
          </button>
          <Link to="/mypantry"><SidebarItem icon={<Sandwich size={20} />} text="My Pantry" active/></Link>
          <SidebarItem icon={<CookingPot size={20} />} text="Recipes" alert />
          <SidebarItem icon={<ClipboardList size={20} />} text="Grocery List" />
          <SidebarItem icon={<Leaf size={20} />} text="Carbon Footprint" />
          <button className="text-left" onClick={() => setActive("Profile")}>
          <SidebarItem
            icon={<CircleUserRound size={20} />}
            text="Account Settings"
          />
          </button>
        </SideNav>
        <div className="flex flex-col">
        <GetRecipeCTA/>
        
        </div>
       </div>
       <footer>
        <Footer/>
        </footer>
        </>
    )
}

