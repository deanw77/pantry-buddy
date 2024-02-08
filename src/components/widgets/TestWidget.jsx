import GroceryList from "./GroceryList";
import PantryEntryForm from "../PantryEntryForm";
import SearchBarRecipeParent from "../SearchBarRecipeParent";

function TestWidget() {
    return ( 
        <div className="pageContent flex flex-col w-full">
          <div id="container" className="w-full">
            <div id="overlay">
              <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-lime-600">
                User Page will appear here
              </h1>

              <GroceryList />
              <PantryEntryForm />
              <SearchBarRecipeParent />
            </div>
          </div>

          
        </div>
     );
}

export default TestWidget;