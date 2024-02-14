// Import Functions from React
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipeTitle, imageUrl, sourceUrl }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if ( recipeTitle !== undefined) {
      console.log(recipeTitle)
      setActive(true)
    }
  }, [])
  

  return (
    //     <div>
    //         {/* <Disclosure>
    //     <Disclosure.Button className="py-2 text-left w-full flex justify-between items-center text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"> */}

    //         {/* <span className="ml-6 h-7 flex items-center">
    //             <svg className="h-6 w-6 rotate-0 transition-transform transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    //             </svg>
    //         </span> */}
    //         {/* </Disclosure.Button> */}

    //         {/* <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> */}

    //             {/* </Disclosure.Panel>

    // </Disclosure> */}
    //         </div>

    //     </div>
    // </div>

    <div className="border-solid border-4 border-green-100 rounded-md h-full">

      
      {active === true && 
      <>
        <div>
          <img src={imageUrl} className="object-cover rounded-md" />
        </div>

        <div className="p-4 grid">
          <h2 className="text-lg font-semibold text-green-600 ">{recipeTitle}</h2>
        </div>

        <div className="p-6 pt-0">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            View Full Recipe
          </a>
        </div>
      </>
      
    }
    </div>
  );
};

export default RecipeCard;
