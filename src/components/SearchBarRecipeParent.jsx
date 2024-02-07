import React, { useState } from 'react';
import SearchBarRecipe from './SeachBarRecipe';
// import ApiComponent?

function SearchBarRecipeParent () {
    const [query, setQuery] = useState('');

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
    };


return (
    <div>
        <SearchBarRecipe onSearch = {handleSearch} />
        {/* ApiCompoment query = {query} */}
    </div>
  );
}

export default SearchBarRecipeParent;