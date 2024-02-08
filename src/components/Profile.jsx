import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { imgDB, txtDB } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function Profile() {

  const user = auth.currentUser;
  const navigate = useNavigate();
  
  const [txt, setTxt] = useState('');
  const [img, setImg] = useState('');

  const handleupload = (e) => {
    const imgs = ref(imgDB, `Imgs/${auth.currentUser.uid}`);
    uploadBytes(imgs, e.target.files[0]).then(data => {
      console.log(data, "imgs")
      getDownloadURL(data.ref).then(val => {
        setImg(val)
      })
    })
  }

  const handleClick = async () => {
    const valRef = doc(txtDB, 'txtData', `${auth.currentUser.uid}`) 
    await setDoc(valRef, {name: `${auth.currentUser.uid}`, txtVal: txt, imgUrl: img}, {merge: true});
    alert('Image Added Successfully')
  }

  const getData = async () => {
    const valRef = doc(txtDB, 'txtData', `${user.uid}`);
    const dataDB = await getDoc(valRef);
    console.log(dataDB)
  }

  useEffect(() => {
    getData();
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Profile
      </h1>
      <p>Signed in as {user.email}`</p>

      <img id="profileImg" src={img} alt="profile" />

      <div className="m-3"> 
        <h3 className="m-3"> Add Username </h3>
        <input className="" onChange={(e) => setTxt(e.target.value)} />

        <button
        onClick={handleClick}
        className="m-5 flex w-300 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add
      </button>
      <h3 className="m-3"> Add Profile Picture </h3>
        <input className="" type="file" onChange={(e) => handleupload(e)} />
      </div>

      

      <button
        onClick={userSignOut}
        className="m-5 flex w-300 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign Out
      </button>
    </>
  );
}