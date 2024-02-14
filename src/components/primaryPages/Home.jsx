import "../css/dashboard.css";
import "../css/widget.css";

import PantryList from "../widgets/PantryList";
import PieCharts from "../widgets/PieChart";

import GroceryListWidget from "../widgets/GroceryListWidget";
import GetRecipeCTA from "../widgets/GetRecipeCTA";


function Home() {
  return (
    <div id="widgetContainer" className="bg-amber-50 flex">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="md:col-start-1 lg:col-span-1 sm:col-span-3 rounded shadow-lg justify-center bg-white">
          <PieCharts />
        </div>

        <div className="md:col-span-1 lg:col-start-2 rounded shadow-lg justify-center bg-white sm-col-span-3 w-auto">
          <PantryList />
        </div>

        <div className="md:col-span-1 sm:col-span-3 rounded shadow-lg justify-center bg-white">
          <GroceryListWidget />
        </div>

       <div  className="md:col-span-3 sm:col-span-3 rounded shadow-lg justify-center bg-white">
          <GetRecipeCTA/>
       </div>
      </div>
    </div>
  );
}

export default Home;
