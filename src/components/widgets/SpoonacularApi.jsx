import { useState, useEffect } from 'react';
import axios from "axios";
import RecipeCard from './RecipeCard';

// eslint-disable-next-line react/prop-types
const SpoonacularApi = ({ query }) => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        // const apiKey = '874ee2d83a849461aa92914b00094a26e';
<<<<<<< HEAD
        const apiKey = 'd592bd071bmsh0f69b85e08df678p1ff500jsn2bf527f623c7';
=======
        const apiKey = '056260ea1ea6431d9482489045ae8ce3';
>>>>>>> 940e9271708b91d00cb602c54c728412c380da66
        const url = 'https://api.spoonacular.com/recipes/complexSearch';

        try {
            const response = await axios.get(url, {
                params: {
                    apiKey: apiKey,
                    query: query,
                    number: 4,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    // responsive display - 4 containers will be displayed on large screen, 2 on medium screen and 1 on small

    return (
        <div className=' mx-auto py-8 gap-6 pt-4 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-neutral-50'>
            {recipes.map((recipe) => (
                <div key={recipe.id}
                    //tailwind animation on img with hover and duration of animation
                    className='border shadow-lg hover:scale-105 duration-500'>
                    <RecipeCard
                        recipeTitle={recipe.title}
                        ingredients={recipe.extendedIngredients}
                        imageUrl={recipe.image}
                        sourceUrl={recipe.sourceUrl}  // Pass the sourceUrl to the RecipeCard component
                    />
                </div>
            ))}
        </div>
    );
};

export default SpoonacularApi;