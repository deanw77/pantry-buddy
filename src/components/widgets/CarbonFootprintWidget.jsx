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
  const [averageFootprint, setAverageFootprint] = useState(null);

  // States required to Store Form Entry and Database information
  const [userPantryList, setUserPantryList] = useState([]);

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

  const foodItems = [];
  const carbonFootPrint = [];

  Object.keys(userPantryList).map((key) => foodItems.push(key));

  const fetchData = async (query) => {
    if (!query) return;

    const options = {
      method: "GET",
      url: `https://foodprint.p.rapidapi.com/api/foodprint/name/${query}`,
      headers: {
        "X-RapidAPI-Key": "d592bd071bmsh0f69b85e08df678p1ff500jsn2bf527f623c7",
        "X-RapidAPI-Host": "foodprint.p.rapidapi.com",
      },
    };

    try {
      setAverageFootprint(null);
      const response = await axios.request(options);
      const data = response.data.slice(0, 10); // Get only the first 10 items
      const totalFootprint = data.reduce(
        (sum, item) => sum + parseFloat(item.footprint || 0),
        0
      );
      const avgFootprint = totalFootprint / data.length;
      setAverageFootprint(avgFootprint.toFixed(2)); // Set the average footprint, rounded to 2 decimal places
      console.log(averageFootprint);
    } catch (error) {
      console.error("Error fetching data from FoodPrint API:", error);
    }
  };

  useEffect(() => {
    for (let i = 0; i < foodItems.length; i++) {
      let query = foodItems[i];
      fetchData(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  // Run the Database inside of useEffect so they don't run repeatedly
  useEffect(() => {
    fetchPantryListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    labels: [...foodItems],
    datasets: [
      {
        label: "123",
        data: [3, 6, 9, 30, 5, 2, 45, 23, 23, 8],
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
        {/* <div className="flex flex-col justify-between items-center wrap">
          <div className="m-4 mt-8 h-64 w-64">
            <Bar
              className=""
              data={dataSet}
              width={"100%"}
              height={"100%"}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div>

          </div>
        </div> */}
      </div>
    </>
  );
}

export default CarbonFootprintWidget;
