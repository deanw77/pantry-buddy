import SearchBarRecipeParent from "../widgets/SearchBarRecipeParent";
import PantryEntryForm from "../widgets/PantryEntryForm";


function CarbonFootprint() {
    return ( 
        <div id="widgetContainer" className="flex bg-amber-50">
            <h1>Carbon Footprint Display</h1>
            <SearchBarRecipeParent />
            <PantryEntryForm />
        </div>
          
        
     );
   
}



export default CarbonFootprint;