import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useState, useEffect } from "react";

export const useFetchDataOnce = async () => {
  // Get user Details for bottom of Nav
  const [userData, setUserData] = useState([]);
  const user = auth.currentUser.uid;

  async function fetchDataOnce(){
  const q = query(collection(db, "userData"), where("name", "==", `${user}`));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setUserData(doc.data());
  });
}
    useEffect(() => {
    fetchDataOnce();
  }, []);

  return userData;
//   const profileImage = userData.ProfileImage;
//   const username = userData.Username;
//   const useremail = userData.Email;
};
