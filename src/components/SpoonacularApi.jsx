import React, { useState, useEffect } from 'react';
import axios from "axios";
import RecipeCard from './RecipeCard';

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
                instructionsRequired: true,
                addRecipeInformation: true,
                fillIngredients: true,

            },
           
        });
        console.log(response);
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
            {recipes.map((recipe) => (
                <RecipeCard key = {recipe.id} recipeTitle = {recipe.title} ingredients = {recipe.extendedIngredients}/>
            ))}
            

    </div>
 );
};

export default SpoonacularApi;

