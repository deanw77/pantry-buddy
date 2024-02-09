import { Link } from "react-router-dom"

export default function GetRecipeCTA() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg justify-center">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Hungry? Get a recipe...</div>
    <p className="text-gray-700 text-base">
      Get recipe ideas based on the items due to expire soon in your pantry!
    </p>
    <Link to="/dashboard"> <button className="bg-amber-500 hover:bg-green-600 text-green-950 font-bold py-2 px-4 rounded">
  GO TO RECIPES PAGE
</button></Link>
  </div>
  </div>
 )
}