import { useState } from "react";
import SearchBarRecipe from "./SearchBarRecipe";
import SpoonacularApi from "./SpoonacularApi";
import RecipeCard from "./RecipeCard";
import Recipe from "../primaryPages/Recipes";

function SearchBarRecipeParent() {
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchBarRecipe onSearch={handleSearch} />
      <SpoonacularApi query={query} />
      <RecipeCard />
      <Recipe />
    </div>
  );
}

export default SearchBarRecipeParent;
