import React, { useState } from 'react';
import SearchBarRecipe from './SeachBarRecipe';
import SpoonacularApi from '../SpoonacularApi';


function SearchBarRecipeParent () {
    const [query, setQuery] = useState('');

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
    };


return (
    <div>
        <SearchBarRecipe onSearch = {handleSearch} />
        <SpoonacularApi query = {query} />
    </div>
  );
}

export default SearchBarRecipeParent;