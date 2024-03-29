import { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const FoodPrintApi = ({ query, onResult }) => {
  const [averageFootprint, setAverageFootprint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null)
      setAverageFootprint(null)
      if (!query) return;

      setLoading(true);
      const options = {
        method: 'GET',
        url: `https://foodprint.p.rapidapi.com/api/foodprint/name/${query}`,
        headers: {
          'X-RapidAPI-Key': 'd592bd071bmsh0f69b85e08df678p1ff500jsn2bf527f623c7',
          'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
        }
      };

      try {
        setError(null)
        setAverageFootprint(null)
        const response = await axios.request(options);
        const data = response.data.slice(0, 10); // Get only the first 10 items
        const totalFootprint = data.reduce((sum, item) => sum + parseFloat(item.footprint || 0), 0);
        const avgFootprint = totalFootprint / data.length;
        setAverageFootprint(avgFootprint.toFixed(2)); // Set the average footprint, rounded to 2 decimal places
      } catch (error) {
        console.error('Error fetching data from FoodPrint API:', error);
        //setError(error);
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

