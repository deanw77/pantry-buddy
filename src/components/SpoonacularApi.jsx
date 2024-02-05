import React, { useState, useEffect } from 'react';
import axios from "axios";

const SpoonacularApi = () => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
      const apiKey = '831da13c3dcd407ea68406f0fd51a6c4';
      const url = 'https://api.spoonacular.com/recipes/complexSearch';
  
      try {
        const response = await axios.get(url, {
            params: {
                apiKey: apiKey,
                query: 'pasta',
                number: 1,
            },
        });
    setRecipes(response.data.results);
      } catch (error) {
        console.error ('Error is', error)
      }
    };

 useEffect(() => {
    fetchRecipes();
 }, []);

return (
    <div>
        <h1>Recipes</h1>
        <ul>
            {recipes.map((recipe) => (
                <li key = {recipe.id}>{recipe.title}</li>
            ))}
            
        </ul>
    </div>
 );
};

export default SpoonacularApi;

