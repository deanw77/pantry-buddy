import SearchBarRecipeParent from "./SearchBarRecipeParent";
import PantryEntryForm from "./PantryEntryForm";


function CarbonFootprint() {
    return ( 
        <div id="widgetContainer" className="flex">
            <h1>Carbon Footprint Display</h1>
            <SearchBarRecipeParent />
            <PantryEntryForm />
        </div>
          
        
     );
   
}



export default CarbonFootprint;