import "../css/widget.css";

export default function GetRecipeCTA() {
  return (
    <div className="w-full h-auto rounded overflow-hidden shadow-lg justify-center bg-amber-200">
      <div className="px-6 py-4">
        <div className="font-bold text-green-700 text-xl mb-2">🥘Hungry? Get a recipe...</div>
        <p className="text-green-950 text-base md-w-2/5 sm-w-3/5" id="recipeCTAText">
          Click on the Recipes tab to get recipe ideas based on the items you have in your pantry and that are due to expire, or search based on any ingredient you would like!
        </p>
      </div>
    </div>
  );
}
