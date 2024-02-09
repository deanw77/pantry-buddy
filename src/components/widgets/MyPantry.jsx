// Imports Displayed on All Pages

import "../css/widget.css";

//Widgets for this page specifically
import GetRecipeCTA from "./GetRecipeCTA";

export default function MyPantry() {
  return (
    <>
      <div id="widgetContainer" className="flex">
        <div className="flex flex-col">
          <GetRecipeCTA />
        </div>
      </div>
    </>
  );
}
