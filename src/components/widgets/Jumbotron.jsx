

export default function Jumbotron() {
    return(
        <div
  className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center bg-[url('./src/assets/images/jumbotronImg.jpg')] h-96">
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(0, 0, 0, 0.6)]">
    <div className="flex h-full items-center justify-center w-auto">
      <div className="text-amber-50">
        <h1 className="mb-4 text-4xl font-bold"> Welcome to PantryBuddy - Your Solution to Food Waste!</h1>
        <h2 className="mb-6 text-xl font-semibold">Effortlessly Manage Your Pantry, Save Money, and Reduce Your Carbon Footprint</h2>
        <a href="#login"><button
                    className="w-autojustify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Sign Up Today
                  </button></a>
      </div>
    </div>
  </div>
</div>
    )
}