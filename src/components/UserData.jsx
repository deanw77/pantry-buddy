import { Link } from "react-router-dom";

import GroceryList from "./widgets/GroceryList";
import PantryEntryForm from "./PantryEntryForm";
import SearchBarRecipeParent from "./SearchBarRecipeParent";

import SideNav, { SidebarItem } from "./nav/SideNav";

//import the needed icons from lucide react
import {
  CookingPot,
  ClipboardList,
  LayoutGrid,
  Sandwich,
  CircleUserRound,
  Leaf,
} from "lucide-react"

export default function UserData() {


  return (
    <>
      <SideNav>
        <SidebarItem
        icon={<LayoutGrid size={20} />}  text="Dashboard" active />
        <SidebarItem icon = {<Sandwich size={20}/>}  text="My Pantry"/>
        <SidebarItem icon={<CookingPot size={20}/>}  text="Recipes" alert/>
        <SidebarItem icon={<ClipboardList size={20}/>}  text="Grocery List"/>
        <SidebarItem icon={<Leaf size={20}/>}  text="Carbon Footprint"/>
        <SidebarItem icon={<CircleUserRound size={20}/>}  text="Account"/>
      </SideNav>

    <div id="container">
      <div id="overlay">
        <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-lime-600">
          User Page will appear here
        </h1>

        <GroceryList />
        <Link to="/profile"><button>Profile Page</button></Link>
        <PantryEntryForm />
        <SearchBarRecipeParent />
      </div>
    </div>
    </>
  );
}