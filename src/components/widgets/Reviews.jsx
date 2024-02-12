import React from "react";

export default function Reviews() {
    return (
        <div className="bg-amber-50 py-12 px-4 sm:px-6 lg:px-8" id="reviews">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-extrabold text-green-700 text-center sm:text-4xl mb-8">
            What our users say...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg">
              <div className="text-gray-700 text-lg mb-4">
                "PantryBuddy has been a game-changer for our family. With two kids and a busy schedule, keeping track of pantry items was always a challenge. Thanks to PantryBuddy's intuitive interface and expiry date reminders, we've significantly cut down on food waste. Plus, the recipe suggestions based on what's expiring soon have been a lifesaver!"
              </div>
              <div className="flex items-center mt-4">
                <img
                  className="h-11 w-11 rounded-full mr-4"
                  src="./src/assets/images/emmaThompson.jpg"
                  alt="Emma Thompson"
                />
                <div>
                  <div className="font-semibold">Emma Thompson</div>
                  <div className="text-gray-600">Mother of two</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg">
              <div className="text-gray-700 text-lg mb-4">
                "As someone passionate about reducing food waste and its environmental impact, I was thrilled to discover PantryBuddy. Not only does it make managing my pantry a breeze, but the carbon footprint feature for grocery items has been eye-opening. PantryBuddy isn't just a tool; it's a step towards a more sustainable future."
              </div>
              <div className="flex items-center mt-4">
                <img
                  className="h-11 w-11 rounded-full mr-4"
                  src="./src/assets/images/markJohnson.jpg"
                  alt="Mark Johnson"
                />
                <div>
                  <div className="font-semibold">Mark Johnson</div>
                  <div className="text-gray-600">Environmental activist</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg">
              <div className="text-gray-700 text-lg mb-4">
                "PantryBuddy has revolutionized how I approach meal planning and grocery shopping. Knowing what's in my pantry and what's about to expire has not only helped me save money by reducing food waste, but it's also inspired me to get creative in the kitchen with the recipe suggestions. It's like having a personal chef and environmentalist in my pocket!"
              </div>
              <div className="flex items-center mt-4">
                <img
                  className="h-11 w-11 rounded-full mr-4"
                  src="./src/assets/images/sarahGarcia.jpg"
                  alt="Sarah Garcia"
                />
                <div>
                  <div className="font-semibold">Sarah Garcia</div>
                  <div className="text-gray-600">Food enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}