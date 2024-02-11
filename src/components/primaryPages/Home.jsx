import PantryEntryForm from "../widgets/PantryEntryForm";
import GetRecipeCTA from "../widgets/GetRecipeCTA";

import "../css/dashboard.css";

function Home() {
  return (
    <div id="widgetContainer" className="flex bg-amber-50 flex-wrap items-stretch">
      <div id="chart" className="rounded shadow-lg">
        <h1>Your Pantry Status</h1>
        <div id="tempChart">
          <p>Some Pantry Infomation goes here</p>
        </div>
      </div>

      <div id="chart2" className="rounded shadow-lg">
        <PantryEntryForm />
      </div>

      <div id="recipeBox">
      <GetRecipeCTA />
      </div>
      
    </div>
  );
}

export default Home;
