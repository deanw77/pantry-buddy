import { Link } from "react-router-dom";
import { useState } from "react";

import TestWidget from "./widgets/TestWidget";
import Profile from "./Profile";

import SideNav, { SidebarItem } from "./nav/SideNav";

//import the needed icons from lucide react
import {
  CookingPot,
  ClipboardList,
  LayoutGrid,
  Sandwich,
  CircleUserRound,
  Leaf,
} from "lucide-react";
import Footer from "./nav/Footer";

export default function UserData() {
  const [active, setActive] = useState("TestWidget");

  return (
    <>
      <div className="flex w-full pageContent">
        <SideNav>
          <button className="text-left" onClick={() => setActive("TestWidget")}>
            <SidebarItem
              icon={<LayoutGrid size={20} />}
              text="Dashboard"
              active
            />
          </button>
          <SidebarItem icon={<Sandwich size={20} />} text="My Pantry" />
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

        <div className="w-full pageContent">
          {active === "TestWidget" && <TestWidget title="TestWidget" />}
          {active === "Profile" && <Profile title="Profile" />}
          <Footer />
        </div>
      </div>
    </>
  );
}
