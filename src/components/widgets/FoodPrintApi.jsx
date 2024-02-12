// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FoodPrintApi = ({ query }) => {
//   const [foodData, setFoodData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!query) return;

//       setLoading(true);
//       const options = {
//         method: 'GET',
//         url: `https://foodprint.p.rapidapi.com/api/foodprint/name/${query}`,
//         headers: {
//           'X-RapidAPI-Key': '402402c2b0mshd8c34bded637b94p10529fjsnc2592f51de16',
//           'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
//         }
//       };
//       try {
//         const response = await axios.request(options);
//         console.log(response.data)
//         setFoodData(response.data);
//       } catch (error) {
//         console.error('Error fetching data from FoodPrint API:', error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [query]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data!</p>;

//   return (
//     <div>
//       {foodData ? (
//         <div>
//           <h3>{foodData.name}</h3>
//           <p>Carbon footprint: {foodData.footprint}</p>
//         </div>
//       ) : (
//         <p>No data to display. Please select an item.</p>
//       )}
//     </div>
//   );
// };

// export default FoodPrintApi;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodPrintApi = ({ query }) => {
  const [averageFootprint, setAverageFootprint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      setLoading(true);
      const options = {
        method: 'GET',
        url: `https://foodprint.p.rapidapi.com/api/foodprint/name/${query}`,
        headers: {
          'X-RapidAPI-Key': '402402c2b0mshd8c34bded637b94p10529fjsnc2592f51de16',
          'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const data = response.data.slice(0, 10); // Get only the first 10 items
        const totalFootprint = data.reduce((sum, item) => sum + parseFloat(item.footprint || 0), 0);
        const avgFootprint = totalFootprint / data.length;
        setAverageFootprint(avgFootprint.toFixed(2)); // Set the average footprint, rounded to 2 decimal places
      } catch (error) {
        console.error('Error fetching data from FoodPrint API:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div>
      {averageFootprint ? (
        <div>
          <h3>Average Carbon Footprint for {query}</h3>
          <p>{averageFootprint} kg of carbon dioxide</p>
        </div>
      ) : (
        <p>No data to display. Please select an item.</p>
      )}
    </div>
  );
};

export default FoodPrintApi;
