import React from 'react';
import SpoonacularApi from '../widgets/SpoonacularApi';


const Recipes = () => {

    return (
        <div className='col-span-1 lg:col-span-2 rounded shadow-lg justify-center bg-white'>
            <SpoonacularApi query={"beans"} />
        </div>
    )
}

export default Recipes;