// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import RecipeCard from './widgets/RecipeCard';

// const SpoonacularApi = ({ query }) => {
//     const [recipes, setRecipes] = useState([]);

//     const fetchRecipes = async () => {
//       const apiKey = '831da13c3dcd407ea68406f0fd51a6c4';
//       const url = 'https://api.spoonacular.com/recipes/complexSearch';

//       try {
//         const response = await axios.get(url, {
//             params: {
//                 apiKey: apiKey,
//                 query: query, 
//                 number: 10, 
//                 instructionsRequired: true,
//                 addRecipeInformation: true,
//                 fillIngredients: true,
//             },
//         });
//         setRecipes(response.data.results);
//       } catch (error) {
//         console.error('Error is', error);
//       }
//     };

//     useEffect(() => {
//       if (query) {
//         fetchRecipes();
//       }
//     }, [query]); 

//     return (
//       <div>
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe.id} 
//                       recipeTitle={recipe.title} 
//                       ingredients={recipe.extendedIngredients} 
//                       imageUrl={recipe.image}/>
//         ))}
//       </div>
//     );
// };

// export default SpoonacularApi;

import React, { useState, useEffect } from 'react';
import axios from "axios";
import RecipeCard from './RecipeCard';

const SpoonacularApi = ({ query }) => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        const apiKey = '831da13c3dcd407ea68406f0fd51a6c4';
        const url = 'https://api.spoonacular.com/recipes/complexSearch';

        try {
            const response = await axios.get(url, {
                params: {
                    apiKey: apiKey,
                    query: query,
                    number: 10,
                    instructionsRequired: true,
                    addRecipeInformation: true,
                    fillIngredients: true,
                },
            });
            const recipeData = response.data.results;

            // Fetch detailed information for each recipe
            const detailedRecipes = await Promise.all(
                recipeData.map(async (recipe) => {
                    const detailedResponse = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
                        params: {
                            apiKey: apiKey,
                        },
                    });
                    return {
                        ...recipe,
                        sourceUrl: detailedResponse.data.sourceUrl,
                    };
                })
            );

            setRecipes(detailedRecipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        if (query) {
            fetchRecipes();
        }
    }, [query]);

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <RecipeCard
                        recipeTitle={recipe.title}
                        ingredients={recipe.extendedIngredients}
                        imageUrl= {recipe.image}
                        sourceUrl={recipe.sourceUrl}  // Pass the sourceUrl to the RecipeCard component
                    />
                </div>
            ))}
        </div>
    );
};

export default SpoonacularApi;
