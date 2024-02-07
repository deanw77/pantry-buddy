import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import UserData from "../UserData";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

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
            {authUser ? <UserData /> : <Dashboard />}
            <Link to="/userdata"><button>Logged In Page</button></Link>
        </>
    );
  
}

export default AuthDetails;