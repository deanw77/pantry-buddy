// Import Functions from React
import { useState, useEffect } from "react";

// Import Required Functions fom FireBase
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import moment from "moment";

import "../css/widget.css";

//Widgets for this page specifically
import PantryList from "../widgets/PantryList";
import PieCharts from "../widgets/PieChart";
import SpoonacularApi from "../widgets/SpoonacularApi";
import RecipeCard from "../widgets/RecipeCard";
import CarbonFootprintWidget from "../widgets/CarbonFootprintWidget";

export default function MyPantry() {
  const [userRecipePantryList, setUserRecipePantryList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [recipeQuery, setRecipeQuery] = useState("");

  // Store Current Users UID
  const user = auth.currentUser.uid;

  // Fetch the users Pantry List from Database
  const fetchPantryListData = async () => {
    const q = query(
      collection(db, "pantryList"),
      where("name", "==", `${user}`)
    );
    const querySnapshot = await getDocs(q);

    // Store the Pantry List from the database into the userPantryList variable.
    querySnapshot.forEach((doc) => {
      setUserRecipePantryList(doc.data());
      // This removes the uid field from the userPantryList Array
      setUserRecipePantryList((current) => {
        // eslint-disable-next-line no-unused-vars
        const { name, ...rest } = current;
        return rest;
      });
    });
  };

  // Run the Database inside of useEffect so they don't run repeatedly
  useEffect(() => {
    fetchPantryListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Now to convert the expiry dates to UNIX timestamps
  let expiryDatesArray = [];
  let expiryItemsArray = [];
  let unixExpiryDatesArray = [];

  let currentUnixTime = moment().unix();

  Object.keys(userRecipePantryList).map((key) =>
    expiryDatesArray.push(userRecipePantryList[key])
  );

  Object.keys(userRecipePantryList).map((key) => expiryItemsArray.push(key));

  for (let i = 0; i < expiryDatesArray.length; i++) {
    let momentObj = moment(expiryDatesArray[i], "YYYY-MM-DD");
    momentObj = moment(momentObj).unix();
    momentObj = momentObj - currentUnixTime;

    unixExpiryDatesArray.push(momentObj);
  }


  let itemToSearch = '';

    let lowest = 200000000;
    for (let i = 0; i < unixExpiryDatesArray.length; i++) {
      if (unixExpiryDatesArray[i] < lowest) {
        lowest = unixExpiryDatesArray[i];
        if (unixExpiryDatesArray[i] > 0) {
          itemToSearch = expiryItemsArray[i];
        }
      }
    }

useEffect(() => {
  setRecipeQuery(itemToSearch);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
      



  return (
    <>
      <div id="widgetContainer" className="bg-amber-50 flex">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <div className="col-start-1 col-span-1 lg:col-span-2 rounded shadow-lg justify-center bg-white">
            <PantryList />
          </div>

          <div className="col-span-1 rounded shadow-lg justify-center bg-white">
            <PieCharts />
          </div>

          <div className="col-span-1 lg:col-span-1 rounded shadow-lg justify-center bg-white">
            <SpoonacularApi query={itemToSearch} />
            <RecipeCard />
          </div>

          <div className="col-span-2 rounded shadow-lg justify-center bg-white">
            <CarbonFootprintWidget />
          </div>
        </div>
      </div>
    </>
  );
}
