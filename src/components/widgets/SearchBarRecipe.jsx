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
        <form onSubmit={handleRecipeSearchSubmit} className="flex justify-center items-center gap-2 mt-4">
            <input
                type="text"
                value={recipeQuery}
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="Enter ingredient"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
                Search for Recipe
            </button>
        </form>
    );
}

export default SearchBarRecipe;


