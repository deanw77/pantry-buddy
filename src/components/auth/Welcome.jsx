//import link feature from react router
import { Link } from "react-router-dom";

//import needed styling and assets
import logo from "../../assets/images/logo_transparent.png";
import "../css/dashboard.css";

//import needed widgets to page
import WelcomeNav from "../nav/WelcomeNav";
import Jumbotron from "../widgets/Jumbotron";
import Footer from "../nav/Footer";
import HowItWorks from "../widgets/HowItWorks";
import Reviews from "../widgets/Reviews";



export default function Dashboard() {
  return (
    <>
{/* Navigation and Header */}
    <WelcomeNav/>
    <Jumbotron/>

{/* How it works */}
    <HowItWorks/>

{/* Reviews Strip */}
    <Reviews/>

{/* Log In/Sign-Up Section */}
    <div id="container">
      <div id="overlay">
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="login">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src={logo} />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign In to your account or Sign Up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <Link to="/login">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Sign In
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/signup">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

{/* Footer */}
<Footer/>
    </>
  );
}
