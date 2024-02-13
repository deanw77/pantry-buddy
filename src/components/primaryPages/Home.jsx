import { useState } from "react";

import "../css/dashboard.css";
import "../css/widget.css";

import PantryList from "../widgets/PantryList";
import PieCharts from "../widgets/PieChart";
import GroceryListWidget from "../widgets/GroceryListWidget";
import SpoonacularApi from "../widgets/SpoonacularApi";
import RecipeCard from "../widgets/RecipeCard";
import SearchBarRecipe from "../widgets/SearchBarRecipe";

function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div id="widgetContainer" className="bg-amber-50 flex">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="col-start-1 col-span-1 lg:col-span-1 rounded shadow-lg justify-center bg-white">
          <PieCharts />
        </div>

        <div className="col-span-1 lg:col-start-2 rounded shadow-lg justify-center bg-white">
          <PantryList />
        </div>

        <div className="col-span-1 rounded shadow-lg justify-center bg-white">
          <GroceryListWidget />
        </div>

        <div className="col-span-1 rounded shadow-lg justify-center bg-white">
          <SearchBarRecipe onSearch={handleSearch} />
        </div>

        <div className="col-span-1 lg:col-span-2 rounded shadow-lg justify-center bg-white">
          <SpoonacularApi query={query} />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
