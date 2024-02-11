// Imports Displayed on All Pages

import "../css/widget.css";

//Widgets for this page specifically
import GetRecipeCTA from "../widgets/GetRecipeCTA";
import PantryList from "../widgets/PantryList";

export default function MyPantry() {
  return (
    <>
      <div id="widgetContainer" className="flex bg-amber-50">
        <div className="flex flex-col">
          <GetRecipeCTA />
          <PantryList />
        </div>
      </div>
    </>
  );
}
