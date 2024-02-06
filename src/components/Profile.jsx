import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Profile() {
  console.log(auth);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Profile
      </h1>
      <p>{`Signed in as ${auth.currentUser.email}`}</p>

      <button
        onClick={userSignOut}
        className="flex w-300 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign Out
      </button>
    </>
  );
}
