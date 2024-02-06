import React, {useState} from "react";

funtion PantryEntryForm() {
  const [foodEntry, setFoodEntry];
  const [expiryDate, setExpiryDate];  
  const handleSubmit = async (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Food Name: 
            <input
              type = 'text'
              value= {foodEntry}
              onChange = {(e) => setFoodEntry(e.target.value)}
              />
        </label>
        <label>
            Expiry Date:
            <input
             type = 'date'
             value = {expiryDate}
             onChange = {(e) => setExpiryDate(e.target.value)}
             />
        </label>
        <button type="submit">Add Food</button>
    </form>

  ):
}

