import React from 'react';

import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
    return(
        <div className="bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-extrabold text-green-700 sm:text-4xl mb-8 text-center">
            How it works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <ul className="list-disc list-inside">
                <li className="flex items-start mt-4">
                  <CheckCircle className="text-green-700 m-3" />
                  <span className="text-lg text-gray-600">
                    Track Your Pantry Items: Easily input and organize the items
                    in your pantry, including their expiry dates.
                  </span>
                </li>
                <li className="flex items-start mt-4">
                  <CheckCircle size={55} className="text-green-700 m-3" />
                  <span className="text-lg text-gray-600">
                  Reduce Food Waste, Save Money, Save the Planet: By staying
                    organized, utilizing expiring items, and making sustainable
                    choices, you'll not only save money but also contribute to a
                    healthier planet by reducing food waste and carbon emissions.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li className="flex items-start mt-4">
                  <CheckCircle size={45} className="text-green-700 m-3" />
                  <span className="text-lg text-gray-600">
                    Create Your Grocery List: Plan your grocery shopping with
                    PantryBuddy's convenient list feature, and see the carbon
                    footprint of each item to make environmentally conscious
                    choices.
                  </span>
                </li>
                <li className="flex items-start mt-4">
                  <CheckCircle size={35} className="text-green-700 m-3" />
                  <span className="text-lg text-gray-600">
                    Get Recipe Suggestions: PantryBuddy analyzes your pantry
                    items and suggests recipes based on what's expiring soon,
                    making meal planning a breeze.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}