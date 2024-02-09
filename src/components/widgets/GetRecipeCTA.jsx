import { Link } from "react-router-dom"

export default function GetRecipeCTA() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg justify-center">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Hungry? Get a recipe...</div>
    <p className="text-gray-700 text-base">
      Get recipe ideas based on the items due to expire soon in your pantry!
    </p>
    <Link to="/dashboard"> <button className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 my-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
  Go to Recipes Page
</button></Link>
  </div>
  </div>
 )
}