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

import "../css/widget.css";

function PantryList() {
  const [foodEntry, setFoodEntry] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [userPantryList, setUserPantryList] = useState([]);
  const [userData, setUserData] = useState([]);
  const user = userData.uid;

  const fetchDataOnce = async () => {
    const q = query(collection(db, "userData"), where("name", "==", `${user}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserData(doc.data());
    });
  };

  const fetchData2Once = async () => {
    const q = query(
      collection(db, "pantryList"),
      where("name", "==", `${auth.currentUser.uid}`)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setUserPantryList(doc.data());

      setUserPantryList((current) => {
        // remove cost key from object
        // eslint-disable-next-line no-unused-vars
        const { name, ...rest } = current;
        return rest;
      });
    });
  };

  useEffect(() => {
    fetchDataOnce();
    fetchData2Once();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valRef = doc(db, "pantryList", `${auth.currentUser.uid}`);
    await setDoc(valRef, { [foodEntry]: `${expiryDate}` }, { merge: true });
    fetchData2Once();

    setFoodEntry("");
    setExpiryDate("");
  };

  const deletePantryItem = async (value) => {
    const current = { ...userPantryList };
    delete current[value];
    setUserPantryList(current);

    const valRef = doc(db, "pantryList", `${auth.currentUser.uid}`);
    const data = {[value]: deleteField()}
    updateDoc(valRef, data)
  };

  return (
    <>
      <div className="max-w-m justify-center bg-white">
        <div className="px-6 py-4">
          <div className="m-5 text-3xl font-bold leading-9 tracking-tight text-green-600">My Pantry</div>
          <div className="m-5 mb-10">
            <ul id="PantryList">
              {Object.keys(userPantryList).map((key, index) => (
                <li key={index}>
                  <span id="PantryListItem">{key}</span>
                  <span id="PantryListExpiry">{userPantryList[key]}</span>
                  <a onClick={() => deletePantryItem(key)}>
                    <span id="PantryListDelete">X</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <label>
            Food Name:
            <input
              type="text"
              value={foodEntry}
              onChange={(e) => setFoodEntry(e.target.value)}
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </label>
          <button
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 my-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Add Item To Pantry
          </button>
        </div>
      </div>
    </>
  );
}

export default PantryList;
