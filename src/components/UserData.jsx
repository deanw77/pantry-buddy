import { Link } from "react-router-dom";

import GroceryList from "./widgets/GroceryList";
import PantryEntryForm from "./PantryEntryForm";
import SearchBarRecipe from "./SeachBarRecipe";

export default function UserData() {


  return (
    <div id="container">
      <div id="overlay">
        <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-lime-600">
          User Page will appear here
        </h1>

        <GroceryList />
        <Link to="/profile"><button>Profile Page</button></Link>
        <PantryEntryForm />
        <SearchBarRecipe />
      </div>
    </div>
  );
}