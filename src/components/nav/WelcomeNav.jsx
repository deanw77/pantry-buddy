import { useState } from "react";
import { Menu, XSquare} from "lucide-react";
import { Link } from "react-router-dom";

//import needed styling and assets
import logo from "../../assets/images/logo_transparent.png";

export default function WelcomeNav() {
//nav starts off false
const [nav, setNav] = useState(false)
//when user clicks the hamburger button, it goes from false(!nav) to true(nav)
const handleClick = () => setNav(!nav)

    return (
        <nav className="nav top-0 left-0 flex flex-row justify-between w-full m-0 bg-amber-50 text-green-800 p-1 items-center shadow-lg font-bold">
            <a href="#" className="nav-logo">
                <img src={logo} alt="PantryBuddy Logo" className="w-48"/>
            </a>

            <ul className="hidden md:flex gap-6">
                <Link to="/welcome"><li>Home</li></Link>
                <a href="#about"><li>About</li></a>
                <a href="#reviews"><li>Reviews</li></a>
                <a href="#login"><li>Log In/ Sign up</li></a>
                
            </ul>
            {/* Hamburger or Close Icon */}
            <div className="md:hidden z-10" onClick={handleClick}>
                {nav ? <XSquare size={25} /> : <Menu size={25}/>}
            </div>
            {/* Mobile Menu */}
            <ul className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to="/welcome"><li className="hover:text-amber-500">Home</li></Link>
        <a href="#about"><li className="hover:text-amber-500">About</li></a>
        <a href="#reviews"><li className="hover:text-amber-500">Reviews</li></a>
        <a href="#login"><li className="hover:text-amber-500">Log In/ Sign up</li></a>
</ul>
        </nav>
    )
}