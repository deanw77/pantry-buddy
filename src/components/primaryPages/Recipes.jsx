import { useState } from "react";

import "../css/widget.css";

import SearchBarRecipe from "../widgets/SearchBarRecipe";
import RecipeCard from "../widgets/RecipeCard";
import SpoonacularApi from '../widgets/SpoonacularApi';


export default function Recipes() {

    const [query, setQuery] = useState("");
  
    const handleSearch = (newQuery) => {
      setQuery(newQuery);
    };

    return (
        <div id="widgetContainer" className="bg-amber-50 flex"> 
        <div className=" grid grid-cols-1 gap-4 w-full">

        <div className="col-span-1 rounded shadow-lg justify-center bg-white">
          <SearchBarRecipe onSearch = {handleSearch} />
        
        <div className="col-span-1  rounded shadow-lg justify-center bg-white">
        <RecipeCard />
          <SpoonacularApi query={query} />
        </div>
          
        </div>
        </div>
        </div>
    )
}