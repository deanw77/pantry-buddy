import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, imgDB, db } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "../css/widget.css";
import PantryEntryForm from "./PantryEntryForm"
import SearchBarRecipeParent from "./SearchBarRecipeParent";

export default function Profile() {
  const user = auth.currentUser.uid;
  const navigate = useNavigate();
  const [txt, setTxt] = useState("");
  const [img, setImg] = useState("");
  const [userData, setUserData] = useState([]);

  const handleupload = (e) => {
    const imgs = ref(imgDB, `Imgs/${auth.currentUser.uid}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        setImg(val);
      });
    });
  };

  async function fetchSingle() {
    const q = query(collection(db, "userData"), where("name", "==", `${user}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserData(doc.data());
    });
  }

  const handleImageClick = async () => {
    const valRef = doc(db, "userData", `${auth.currentUser.uid}`);
    await setDoc(
      valRef,
      { name: `${auth.currentUser.uid}`, ProfileImage: img },
      { merge: true }
    );
    fetchSingle();
  };

  const handleUsernameClick = async () => {
    const valRef = doc(db, "userData", `${auth.currentUser.uid}`);
    await setDoc(
      valRef,
      { name: `${auth.currentUser.uid}`, Username: txt },
      { merge: true }
    );
    fetchSingle();
  };

  useEffect(() => {
    fetchSingle();
  }, []);

  const profileImage = userData.ProfileImage;
  const username = userData.Username;
  const useremail = userData.Email;

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const userDelete = () => {
    delete(auth).then(() => {
      console.log("User deleted");
    })
  }

  return (
    <div id="widgetContainer" className="bg-amber-50">
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-amber-500">
        Update Profile
      </h1>

      <div id="ProfileContainer">
        <div id="profileImageContainer">
          <img id="mainProfileImage" src={profileImage} />
        </div>

        <div
          id="userDetailsContainer"
          className="text-center font-bold text-green-700 text-2xl"
        >
          <h2>{username}</h2>
          <p>{useremail}</p>
        </div>
      </div>

      <hr />

      <div id="updateDetails">
        <h3 className="m-3 font-bold"> Add or Change Profile Picture </h3>

        <input className="m-5 flex w-300 justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" type="file" onChange={(e) => handleupload(e)} />

        <button
          onClick={handleImageClick}
          className="m-5 flex w-300 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Add / Update
        </button>
      </div>

      <hr />

      <div id="updateDetails">
        <h3 className="m-3 font-bold"> Add or Change Username </h3>

        <input className="" onChange={(e) => setTxt(e.target.value)} />

        <button
          onClick={handleUsernameClick}
          className="m-5 flex w-300 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Add / Update
        </button>
      </div>

      <hr />

      <button
        onClick={userSignOut}
        className="m-5 flex w-300 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign Out
      </button>
      <SearchBarRecipeParent />
    </div>
  );
}
