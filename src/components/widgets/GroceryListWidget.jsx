import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs, doc, setDoc, updateDoc, deleteField } from "firebase/firestore";
// import FoodPrintApi from "./FoodprintApi";
function GroceryList() {
  const [foodEntry, setFoodEntry] = useState("");
  const [userGroceryList, setUserGroceryList] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(""); // State for tracking the selected item for FoodPrintAPI

  const user = auth.currentUser.uid;

  const fetchPantryListOnce = async () => {
    const q = query(collection(db, "groceryList"), where("name", "==", `${user}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserGroceryList(doc.data());
      setUserGroceryList((current) => {
        const { name, ...rest } = current;
        return rest;
      });
    });
  };

  useEffect(() => {
    fetchPantryListOnce();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valRef = doc(db, "groceryList", `${auth.currentUser.uid}`);
    await setDoc(valRef, { [foodEntry]: `${foodEntry}` }, { merge: true });
    fetchPantryListOnce();

    setFoodEntry("");
  };

  const deleteGroceryItem = async (value) => {
    const current = { ...userGroceryList };
    delete current[value];
    setUserGroceryList(current);

    const valRef = doc(db, "groceryList", `${auth.currentUser.uid}`);
    await updateDoc(valRef, { [value]: deleteField() });
  };

  return (
    <div className="bg-white p-6 flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-green-600">My Grocery List</h1>

      <ul id="PantryList">
        {Object.keys(userGroceryList).map((key, index) => (
          <li key={index} className="flex justify-between align-center m-1">
            <span id="PantryListItem" className="p-1 pl-5">{key}</span>
            <a onClick={() => deleteGroceryItem(key)}>
              <div className="bg-red-700 flex align-center justify-center rounded-full">  
                <span id="PantryListDelete" className="pr-3 m-0 text-white">X</span>
              </div>
            </a>
            {/* <button onClick={() => setSelectedItem(key)}>Check Footprint</button>  */}
          </li>
        ))}
      </ul>

      <label htmlFor="FoodName" className="font-semibold">
        Food Name: 

        <input
          type="text"
          value={foodEntry}
          onChange={(e) => setFoodEntry(e.target.value)}
          className="w-full  p-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </label>

      <button
        onClick={handleSubmit}
        className="w-full justify-center rounded-md bg-green-600 p-2 mt-12 my-3 text-sm font-semibold leading-6 text-black shadow-lg hover:bg-amber-500"
      >
        Add Item To Shopping List
      </button>

    </div>
  );
}

export default GroceryList;

