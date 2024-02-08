import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Dashboard from "../Dashboard";
import Welcome from "./Welcome";


function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
        <>
            {authUser ? <Dashboard /> : <Welcome />}
        </>
    );
  
}

export default AuthDetails;