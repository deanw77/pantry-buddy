import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

import "../auth/css/dashboard.css";

function GroceryList() {
  const [userGroceryList, setUserGroceryList] = useState([]);

  async function fetchSingle() {
    const q = query(
      collection(db, "groceryList"),
      where("name", "==", `${auth.currentUser.uid}`)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserGroceryList(doc.data());
    });
  }

  useEffect(() => { 
    fetchSingle();
  }, []);

  const addGroceryItem = async () => {
    const addShopping = doc(db, "groceryList", `${auth.currentUser.uid}`);
    await setDoc(
      addShopping,
      { 1: 'milk', 2: 'bread', 3: 'chicken', 4: 'Tofu', 5: 'Beer', 6: 'Vodka' },
      { merge: true}
    )
    fetchSingle();
  }

  addGroceryItem();
  console.log(userGroceryList)

  return (
    <>
      <h1 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-green-600">
        Grocery List
      </h1>

      <h1 className="m-5 text-3xl font-bold leading-9 tracking-tight text-green-600">
        List of Items Retrieved from Users Database
      </h1>

      <div className="m-5 mb-20">
        <p>
          {Object.keys(userGroceryList).map((keyName, i) => (
            <li key={i}>
              <span className="input-label">{userGroceryList[keyName]}</span>
            </li>
          ))}
        </p>
      </div>
    </>
  );
}

export default GroceryList;
