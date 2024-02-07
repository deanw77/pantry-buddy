import React, {useState} from 'react';

function SearchBarRecipe({onSearch}) {

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
    <form onSubmit = {handleRecipeSearchSubmit}>
        <input
            type = 'text'
            value = {recipeQuery}
            onChange = {handleInputChange}
        />
        <button type = 'submit'> Search </button>
    </form>
  );
}

export default SearchBarRecipe;

