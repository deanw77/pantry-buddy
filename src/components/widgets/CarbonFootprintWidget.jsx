// Import Functions from React
import { useState, useEffect } from "react";
import axios from "axios";

// Import Required Functions fom FireBase
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// Get Chart Elements
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale);

function CarbonFootprintWidget() {
  // States required to Store Form Entry and Database information
  const [userPantryList, setUserPantryList] = useState([]);
  const [userItemList, setUserItemList] = useState([]);
  const [userCarbonList, setUserCarbonList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState({});

  const itemArray = [];
  const footArray = [];
  const foodItems = [];

  // Store Current Users UID
  const user = auth.currentUser.uid; 

  // Fetch the users Pantry List from Database
  const fetchPantryListData = async () => {
    const q = query(
      collection(db, "pantryList"),
      where("name", "==", `${user}`)
    );
    const querySnapshot = await getDocs(q);

    // Store the Pantry List from the database into the userPantryList variable.
    querySnapshot.forEach((doc) => {
      setUserPantryList(doc.data());
      // This removes the uid field from the userPantryList Array
      setUserPantryList((current) => {
        // eslint-disable-next-line no-unused-vars
        const { name, ...rest } = current;
        return rest;
      });
    }); 
  }; 
   
  // Run the Database inside of useEffect so they don't run repeatedly
  useEffect(() => {
    fetchPantryListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {   
    for (let i = 0; i < foodItems.length; i++) {  
      getCarbonBarChart(foodItems[i]); 
    }     
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPantryList]);   
 
  async function getCarbonBarChart(query) { 
    const options = {
      method: "GET",
      url: `https://foodprint.p.rapidapi.com/api/foodprint/name/${query}`,
      headers: {
        "X-RapidAPI-Key": "d592bd071bmsh0f69b85e08df678p1ff500jsn2bf527f623c7",
        "X-RapidAPI-Host": "foodprint.p.rapidapi.com",
      },
    };   
 
    try {
      const response = await axios.request(options);
      const data = response.data.slice(0, 10);
      const totalFootprint = data.reduce((sum, item) => sum + parseFloat(item.footprint || 0), 0 );
      const avgFootprint = totalFootprint / data.length;
      
      footArray.push(avgFootprint);
      itemArray.push(query);

      setUserItemList([...itemArray]);
      setUserCarbonList([...footArray]);  
      // setLoading(true); 
    } catch (error) {
      console.error('unknown food item' + error);
    } 
  }         
 
  Object.keys(userPantryList).map((key) => foodItems.push(key));   
     
  const data = {
    labels: userItemList,     
    datasets: [ 
      { 
        data: userCarbonList,
        backgroundColor: "DarkOrange",
        borderColor: "black",
        borderWidth: 1,
      },   
    ],      
  };  
  
  const options = {};

  return (
     
    <>
      <div className="bg-white p-6 flex flex-col justify-between">
        
        <h1 className="text-1xl font-bold text-black text-center">
          What is Your Carbon Footprint?  
        </h1>
      
        <div>  
          <Bar data={data} options={options}></Bar>
        </div>
     
      </div>
    </>
  );
}

export default CarbonFootprintWidget;
