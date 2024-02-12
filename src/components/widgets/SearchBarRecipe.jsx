import React, { useState } from 'react';

function SearchBarRecipe({ onSearch }) {
    const [recipeQuery, setRecipeQuery] = useState('');

    const handleInputChange = (e) => {
        setRecipeQuery(e.target.value);
    };

    const handleRecipeSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(recipeQuery);
        setRecipeQuery('');
    };

    return (
        <form onSubmit={handleRecipeSearchSubmit} className="flex flex-col justify-center items-center gap-2 mt-4 p-4">
            <input
                type="text"
                value={recipeQuery}
                onChange={handleInputChange}
                className="w-full  p-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="Enter ingredient"
            />
            <button
                type="submit"
                className="w-full justify-center rounded-md bg-green-600 p-2 my-3 text-sm font-semibold leading-6 text-black shadow-lg hover:bg-amber-500"
            >
                Search for Recipe
            </button>
        </form>
    );
}

export default SearchBarRecipe;


