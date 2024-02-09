// import React, {useState} from "react";

// function PantryEntryForm() {
//   const [foodEntry, setFoodEntry] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');


//   const handleSubmit = async (e) => {
//     //logic to add to firebase
//         e.preventDefault();
//         setFoodEntry('');
//         setExpiryDate('');
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//         <label>
//             Food Name: 
//             <input
//               type = 'text'
//               value= {foodEntry}
//               onChange = {(e) => setFoodEntry(e.target.value)}
//               />
//         </label>
//         <label>
//             Expiry Date:
//             <input
//              type = 'date'
//              value = {expiryDate}
//              onChange = {(e) => setExpiryDate(e.target.value)}
//              />
//         </label>
//         <button type="submit">Add Food</button>
//     </form>

//   );
// }

// export default PantryEntryForm

import React, { useState } from "react";

function PantryEntryForm() {
  const [foodEntry, setFoodEntry] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to add to firebase
    setFoodEntry('');
    setExpiryDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col space-y-2">
          <label className="block text-green-700 text-sm font-bold mb-2">
            Food Name:
            <input
              type="text"
              value={foodEntry}
              onChange={(e) => setFoodEntry(e.target.value)}
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter food name"
            />
          </label>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="block text-green-700 text-sm font-bold mb-2">
            Expiry Date:
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </label>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Add Food
        </button>
    </form>
  );
}

export default PantryEntryForm;
