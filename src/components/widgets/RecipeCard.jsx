// Import Functions from React
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipeTitle, imageUrl, sourceUrl }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (recipeTitle !== undefined) {
      setActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {active === true && (
        <>
          <div>
            <img src={imageUrl} className="object-cover rounded-md" />
          </div>

          <div className="p-4 grid">
            <h2 className="text-lg font-semibold text-green-600 ">
              {recipeTitle}
            </h2>
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
      )}
    </>
  );
};

export default RecipeCard;
