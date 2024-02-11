import "../css/widget.css";

import GroceryListWidget from "../widgets/GroceryListWidget";
import PantryList from "../widgets/PantryList";
import RecipeCard from "../widgets/RecipeCard";
import GetRecipeCTA from "../widgets/GetRecipeCTA";

function GroceryList() {

  return (
    <div id="widgetContainer" className="bg-amber-50 flex">

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">

        <div className="col-start-1 col-span-1 lg:col-span-2 rounded shadow-lg justify-center bg-white">
          <GroceryListWidget />
        </div>

        <div className="col-span-1 lg:col-start-3 rounded shadow-lg justify-center bg-white">
          <PantryList />
        </div>

        <div className="col-span-1 rounded shadow-lg justify-center bg-white">
          <GetRecipeCTA />
        </div>
        
        <div className="col-span-1 lg:col-span-2 rounded shadow-lg justify-center bg-white">
          <RecipeCard />
        </div>

      </div>
    </div>
  );
}

export default GroceryList;
