import React, { useState } from 'react';
import SearchBarRecipe from './SearchBarRecipe';
import SpoonacularApi from '../SpoonacularApi';
import RecipeCard from './RecipeCard';


function SearchBarRecipeParent () {
    const [query, setQuery] = useState('');

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
    };


return (
    <div>
        <SearchBarRecipe onSearch = {handleSearch} />
        <SpoonacularApi query = {query} />
        <RecipeCard />

    </div>
  );
};

export default SearchBarRecipeParent;