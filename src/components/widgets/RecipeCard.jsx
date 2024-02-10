import React from 'react';
// import { Disclosure } from '@headlessui/react';

const RecipeCard = ({ recipeTitle, imageUrl, sourceUrl }) => {
    return (

        <div className='border-solid border-4 border-yellow-600'>

            <div>
                {/* <Disclosure>
            <Disclosure.Button className="py-2 text-left w-full flex justify-between items-center text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"> */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">{recipeTitle}</h2>
                </div>

                {/* <span className="ml-6 h-7 flex items-center">
                    <svg className="h-6 w-6 rotate-0 transition-transform transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span> */}
                {/* </Disclosure.Button> */}


                {/* <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> */}

                <div>
                    <img
                        className='w-full h-[150px] object-cover rounded-md border-solid border-4 border-amber-50'
                        src={imageUrl} />
                    <ul className="list-disc pl-5 space-y-1">
                    </ul>
                </div >

                <div>
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        View Full Recipe
                    </a>
                    {/* </Disclosure.Panel>

        </Disclosure> */}
                </div>

            </div>
        </div>

    );
};




export default RecipeCard;
