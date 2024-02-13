import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";


function PantryEntryForm() {
  const [foodEntry, setFoodEntry] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  // eslint-disable-next-line no-unused-vars
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
    //logic to add to firebase
    e.preventDefault();

    const valRef = doc(db, "pantryList", `${auth.currentUser.uid}`);
    await setDoc(valRef, { [foodEntry]: `${expiryDate}` }, { merge: true });
    fetchData2Once();

    setFoodEntry("");
    setExpiryDate("");
  };

  return (
      <div className="max-w-m rounded overflow-hidden shadow-lg justify-center">
        <div className="font-bold text-xl mb-2">My Pantry</div>

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
  );
}

export default PantryEntryForm;
