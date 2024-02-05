import React from 'react';
import { Disclosure } from '@headlessui/react';

const RecipeCard = ({ recipeTitle, ingredients }) => {
    return (
        <Disclosure>
            <Disclosure.Button className="py-2">
                <h2>{recipeTitle}</h2>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <ul>
                    {ingredients && ingredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                    ))}
                </ul>
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default RecipeCard;
