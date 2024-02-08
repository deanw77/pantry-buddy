import { useState } from "react";

// Imports Displayed on All Pages
import SideNav, { SidebarItem } from "./nav/SideNav";
import Footer from "./nav/Footer";

// Components Selected Via Nav
import TestWidget from "./widgets/TestWidget";
import Profile from "./widgets/Profile";

//import the needed icons from lucide react
import {
  CookingPot,
  ClipboardList,
  LayoutGrid,
  Sandwich,
  CircleUserRound,
  Leaf,
} from "lucide-react";

import "./css/widget.css";

export default function UserData() {
  const [active, setActive] = useState("TestWidget");

  return (
    <>
      <div className="flex w-full pageContent">
        <SideNav>
          <a
            className="text-left flex-1"
            onClick={() => setActive("TestWidget")}
          >
            <SidebarItem
              icon={<LayoutGrid size={20} />}
              text="Dashboard"
              active
            />
          </a>
          <a className="text-left" onClick={() => setActive("TestWidget")}>
            <SidebarItem icon={<Sandwich size={20} />} text="My Pantry" />
          </a>
          <a
            className="text-left"
            onClick={() => setActive("TestWidget")}
          ></a>
          <a
            className="text-left flex-1"
            onClick={() => setActive("TestWidget")}
          >
            <SidebarItem icon={<CookingPot size={20} />} text="Recipes" alert />
          </a>
          <a
            className="text-left flex-1"
            onClick={() => setActive("TestWidget")}
          >
            <SidebarItem
              icon={<ClipboardList size={20} />}
              text="Grocery List"
            />
          </a>
          <a
            className="text-left flex-1"
            onClick={() => setActive("TestWidget")}
          >
            <SidebarItem icon={<Leaf size={20} />} text="Carbon Footprint" />
          </a>
          <a className="text-left" onClick={() => setActive("Profile")}>
            <SidebarItem
              icon={<CircleUserRound size={20} />}
              text="Account Settings"
            />
          </a>
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
