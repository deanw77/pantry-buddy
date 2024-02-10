// Get Library Elements
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, } from "firebase/firestore";
import swal from 'sweetalert';

// Get logo
import logo from "../../assets/images/logo_transparent.png";

// Import CSSFile
import "./css/dashboard.css";

export default function SignUp() {
  // UseStates for setting the data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // This useState is to prevent the signup button from being double clicked andcreating duplicate accounts
  const [loading, setLoading] = useState(false);

  // Set Variables for navigation and storing the password inputs.
  const navigate = useNavigate();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // On Successful Signup Automatically Build Three Databases for the User
  // One for UserData, One for Pantry List, One for Grocery List
  const createUserDatabases = async () => {
    const userDetails = doc(db, "userData", `${auth.currentUser.uid}`);
    await setDoc(
      userDetails,
      { name: `${auth.currentUser.uid}`, Email: email, Username: 'Pantry Buddy' },
      { merge: true }
    );
    const userPantry = doc(db, "pantryList", `${auth.currentUser.uid}`);
    await setDoc(
      userPantry,
      { name: `${auth.currentUser.uid}`},
      { merge: true }
    );
    const userGroceries = doc(db, "groceryList", `${auth.currentUser.uid}`);
    await setDoc(
      userGroceries,
      { name: `${auth.currentUser.uid}`},
      { merge: true }
    );
  }

  // Async Function to create a new user account on Firebase
  const signup = async (e) => {
    e.preventDefault();

    // Check that both passwords match
    // Firebase already takes care of email validation and password being more than 6 characters
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    // Run the createUser function that is imported from Firebase
    // Passing in the auth that was imported and the email and password
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        // setLoading(true) prevents signup button being clicked again while data is being submitted
        setLoading(true);

        createUserDatabases();

        // Display a custom alert from sweetalert to show account created successfully
        swal({
          title: "Welcome",
          text: `Succesfully signed up`,
          icon: "success",
        });
        // Automatically redirect to Dashboard page
        navigate("/");
      })
      .catch((error) => {
        // Failed signed up, usually because email already registered
        // Custom error message provides options to redirect to login or attempt signup again
        swal({
          title: "Something has Gone Wrong.",
          text: `${error}`,
          icon: "warning",
          dangerMode: true,
          buttons: {
            cancel: "Retry with different email",
            login: {
              text: "Login",
              value: "Login",
            }
          }
        })
        // This navigates to login if user chooses that option or just closes the alert box
        .then(value => {
          switch (value) {
            case "Login":
              navigate("/login");
              break;
            default:
              swal("Let's try again");
          }
        });
      });
    // Set loading back to false so sign up button is active again
    setLoading(false);
  };

  return (
    <div id="container">
      <div id="overlay">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} />
          <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-green-600">
            Sign Up for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={signup} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-green-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  // Anytime the email is enter, onChange uses useState to update the email stored value
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-green-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                // Anytime the password is enter, onChange uses useState to update the password stored value
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium leading-6 text-green-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  // This password doesn't need useState, just stored in reference for checking passwords match
                  ref={passwordConfirmRef}
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Display an error if passwords to short or do not match */}
            {error && (
              <p className="text-red-600 text-center font-bold">{error}</p>
            )}

            <div>
              <button
                // Button is disabled only while data is being sent to database 
                disabled={loading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center text-green-600 font-bold">
              Already have an account? <Link to="/login">Log In</Link>{" "}
            </p>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
