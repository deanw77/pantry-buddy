// Import Functions from React
import { useState, useEffect } from "react";

// Import Required Functions fom FireBase
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs, doc, setDoc, updateDoc, deleteField, } from "firebase/firestore";

function PantryList() {
  // States required to Store Form Entry and Database information
  const [foodEntry, setFoodEntry] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [userPantryList, setUserPantryList] = useState([]);
 

  // Store Current Users UID
  const user = auth.currentUser.uid;

  // Fetch the users Pantry List from Database
  const fetchPantryListData = async () => {
    const q = query(collection(db, "pantryList"), where("name", "==", `${user}`));
    const querySnapshot = await getDocs(q);

    // Store the Pantry List from the database into the userPantryList variable.
    querySnapshot.forEach((doc) => {
      setUserPantryList(doc.data());
      // This removes the uid field from the userPantryList Array
      setUserPantryList((current) => {
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

  // Take the data from the two input fields and add it to the users database.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const valRef = doc(db, "pantryList", `${auth.currentUser.uid}`);
    await setDoc(valRef, { [foodEntry]: `${expiryDate}` }, { merge: true });
    // Once we have added the data, we will to call the fetch data function to update the Pantry List variable
    fetchPantryListData();

    // Clear the form fields
    setFoodEntry("");
    setExpiryDate("");
  };

  // Delete Item from Pantry DataBase onClick event
  const deletePantryItem = async (value) => {
    // Create an array contents of UserPantryList Variable
    const current = { ...userPantryList };
    // Delete the value passed, this will corespond to the item being deleted
    delete current[value];
    // Set the Pantry List to the new set of a values
    setUserPantryList(current);

    // Delete the same value passed from the Database
    const valRef = doc(db, "pantryList", `${auth.currentUser.uid}`);
    const data = {[value]: deleteField()}
    updateDoc(valRef, data)
  };

  return (
      <div className="bg-white p-6 flex flex-col justify-between">

          <div className="text-3xl font-bold text-green-600">
            My Pantry
          </div>

          <ul id="PantryList">
            {Object.keys(userPantryList).map((key, index) => (
              <li key={index} className="flex justify-between align-center m-1">
                <span id="PantryListItem" className="p-1 pl-5">{key}</span>
                <span id="PantryListExpiry">{userPantryList[key]}</span>
                <a onClick={() => deletePantryItem(key)}>
                  <div className="bg-red-700 flex align-center justify-center rounded-full">
                    <span id="PantryListDelete" className="pr-3  m-0 text-white">
                      X 
                    </span>
                  </div> 
                </a>
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
          
          <label htmlFor="FoodName" className="font-semibold">
            Expiry Date: 
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full  p-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </label>

          <button
            onClick={handleSubmit}
            className="w-full justify-center rounded-md bg-green-600 p-2 my-3 text-sm font-semibold leading-6 text-black shadow-lg hover:bg-amber-500"
          >
            Add Item To Pantry
          </button>

        </div> 
  );
}

export default PantryList;