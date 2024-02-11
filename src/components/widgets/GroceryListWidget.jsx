import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";

import "../css/dashboard.css";
import "../css/widget.css";

function GroceryList() {
  const user = auth.currentUser.uid;
  const [foodEntry, setFoodEntry] = useState("");
  const [userGroceryList, setUserGroceryList] = useState([]);

  const fetchDataOnce = async () => {
    const q = query(
      collection(db, "groceryList"),
      where("name", "==", `${user}`)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserGroceryList(doc.data());
      setUserGroceryList((current) => {
        // eslint-disable-next-line no-unused-vars
        const { name, ...rest } = current;
        return rest;
      });
    });
  };

  useEffect(() => {
    fetchDataOnce();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valRef = doc(db, "groceryList", `${auth.currentUser.uid}`);
    await setDoc(valRef, { [foodEntry]: `${foodEntry}` }, { merge: true });
    fetchDataOnce();

    setFoodEntry("");
  };

  const deleteGroceryItem = async (value) => {
    const current = { ...userGroceryList };
    delete current[value];
    setUserGroceryList(current);

    const valRef = doc(db, "groceryList", `${auth.currentUser.uid}`);
    const data = { [value]: deleteField() };
    updateDoc(valRef, data);
  };

  return (
    <div className="bg-white p-6 flex flex-col justify-between">

      <h1 className="text-3xl font-bold text-green-600">
        My Grocery List
      </h1>

      <ul id="PantryList">
        {Object.keys(userGroceryList).map((key, index) => (
          <li key={index} className="flex justify-between align-center m-1">
            <span id="PantryListItem" className="p-1 pl-5">{key}</span>
            <a onClick={() => deleteGroceryItem(key)}>
              <span id="PantryListDelete" className="pr-3 m-0">X</span>
            </a>
          </li>
        ))}
      </ul>

      <label>
        Food Name:
        <input
          type="text"
          value={foodEntry}
          onChange={(e) => setFoodEntry(e.target.value)}
        />
      </label>

      <button
        onClick={handleSubmit}
        className="flex w-full justify-center rounded-md bg-green-600 px-3 mt- py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2"
      >
        Add Item To Shopping List
      </button>
    </div>
  );
}

export default GroceryList;
