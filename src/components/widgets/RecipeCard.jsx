import React from 'react';
import { Disclosure } from '@headlessui/react';

const RecipeCard = ({ recipeTitle, ingredients }) => {
    return (
        <Disclosure>
            <Disclosure.Button className="py-2 text-left w-full flex justify-between items-center text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h2 className="text-lg font-semibold text-gray-900">{recipeTitle}</h2>
                <span className="ml-6 h-7 flex items-center">
                    <svg className="h-6 w-6 rotate-0 transition-transform transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </Disclosure.Button>

        
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-1">
                    {ingredients && ingredients.map((ingredient) => (
                        <li key={ingredient.id} className="text-gray-600">{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                    ))}
                </ul>
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default RecipeCard;
