import GroceryList from "./GroceryList";
import PantryEntryForm from "./PantryEntryForm";
import SearchBarRecipeParent from "./SearchBarRecipeParent";

import "../css/widget.css";

function TestWidget() {
    return ( 

            <div id="widgetContainer">
              <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-lime-600">
                Main Page Once Logged In
              </h1>

              <GroceryList />
              <PantryEntryForm />
              <SearchBarRecipeParent />
            </div>
   

     );
}

export default TestWidget;