import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import "../css/dashboard.css";

function GroceryList() {
  const user = auth.currentUser.uid;
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
    });
  }

  useEffect(() => {
    fetchDataOnce()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const addGroceryItem = async () => {
  //   const addShopping = doc(db, "groceryList", `${auth.currentUser.uid}`);
  //   await setDoc(
  //     addShopping,
  //     { },
  //     { merge: true }
  //   );
  //   fetchDataOnce()
  // };

  // useEffect(() => {
  //   addGroceryItem()
  // }, []);

  return (
    <div id="widgetContainer" className="flex bg-amber-50">
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
    </div>
  );
}

export default GroceryList;
