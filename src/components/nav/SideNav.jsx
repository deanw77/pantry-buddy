//navigation sidebar with the option to expand and close it for the user dashboard and its section pages
//importing icons from lucide react
import { ChevronLast, ChevronFirst } from "lucide-react";

//import createContext, useContext, useState
import { createContext, useContext, useState } from "react";



//make sidebar items close and expand based on the context of the sidebar - wrap children elements in this
const SidebarContext = createContext();

//set default state of the sidebar as expanded
export default function SideNav({ children }) {
  const [expanded, setExpanded] = useState(true);

  //sidebar styling and positioning
  //may remove logo + user details to add to a top navbar if we decide to create one
  //show different icons depending on whether the state is expanded or minified
  return (
    <aside className="h-100">
      <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="./images/logo_transparent.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-40" : "w-0"
            }`}
            alt="PantryBuddy logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img
            src="./images/logo_icon_square.png"
            alt="User Profile Image"
            className="w-10 h-10 rounded-full"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Jane Doe</h4>
              <span className="text-xs text-gray-600">janedoe@mail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

//setting the sidebar items styling; when page is active, it is highlighted, and when user hovers over other pages, it highlights them in a lighter colour.
export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
        relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
          active
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-900"
            : "hover:bg-orange-50 text-green-8=900"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`aboslute right-2 w-2 h-2 rounded bg-amber-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6 bg-amber-100 text-green-950 text-sm invisible opacity-20 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
