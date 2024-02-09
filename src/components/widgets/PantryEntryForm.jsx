import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

function PantryEntryForm() {
  const user = auth.currentUser.uid;
  const [foodEntry, setFoodEntry] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [userPantryList, setUserPantryList] = useState([]);

  const handleSubmit = async (e) => {
    //logic to add to firebase
    e.preventDefault();
    setFoodEntry("");
    setExpiryDate("");
  };

  const fetchDataOnce = async () => {
    const q = query(
      collection(db, "pantryList"),
      where("name", "==", `${user}`)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserPantryList(doc.data());
    });
  };

  useEffect(() => {
    fetchDataOnce();
  }, []);

  let itemName = [];
    let itemExpiry = [];

  const pantryItems = () => {
    const keysArray = Object.keys(userPantryList)
    

    for (let index = 1; index < keysArray.length; index++) {
      itemName.push(userPantryList[index][0])
      itemExpiry.push(userPantryList[index][1])
    }
    console.log(itemName + ' ' + itemExpiry)
  }

  pantryItems();

  return (
    <>
      <div id="PantryList">
        <h1>Pantry List</h1>
        <div className="m-5 mb-20">
          <ul>
          {Object.keys(itemName, itemExpiry).map((keyName, keyName2, i) => (
            <li key={i}>
              <span className="input-label">{itemName[keyName]}: {itemExpiry[keyName2]}</span>
            </li>
          ))}
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Food</button>
      </form>
    </>
  );
}

export default PantryEntryForm;
