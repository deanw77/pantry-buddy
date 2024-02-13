import React from 'react';
import SpoonacularApi from '../widgets/SpoonacularApi';
// import axios from 'axios';
// import RecipeCard from '../widgets/RecipeCard'

const Recipes = () => {

    return(
<div className='col-span-1 lg:col-span-2 rounded shadow-lg justify-center bg-white'>
<SpoonacularApi query={"beans"}/>
</div>
    )
}


    

export default Recipes;