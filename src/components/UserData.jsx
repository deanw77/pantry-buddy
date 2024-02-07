import Dashboard from "./auth/Dashboard";
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
      </>
  );
}
