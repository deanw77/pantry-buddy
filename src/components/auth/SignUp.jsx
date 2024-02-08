import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';

import logo from "../../assets/images/logo_transparent.png";
import "./css/dashboard.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const signup = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        setLoading(true);
        swal({
          title: "Welcome",
          text: `Succesfully signed up`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
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
                  ref={passwordConfirmRef}
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-center font-bold">{error}</p>
            )}

            <div>
              <button
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
