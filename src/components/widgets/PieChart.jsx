// Import Functions from React
import { useState, useEffect } from "react";

// Import Required Functions fom FireBase
import { auth, db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
 
import moment from 'moment';

// Get Chart Elements
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart Elements
Chart.register(ArcElement);

function PieCharts() {
  // Set User Pantry List Variable
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

  // Run the Database inside of useEffect so they don't run repeatedly
  useEffect(() => {
    fetchPantryListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Now to convert the expiry dates to UNIX timestamps
  let expiryDatesArray = [];
  let unixExpiryDatesArray = [];

  let currentUnixTime = moment().unix();

  Object.keys(userPantryList).map((key) =>
    expiryDatesArray.push(userPantryList[key])
  );

  let expired = 0;
  let shortDate = 0;
  let allGood = 0;

  for (let i = 0; i < expiryDatesArray.length; i++) {
    let momentObj = moment(expiryDatesArray[i], 'YYYY-MM-DD')
    momentObj = moment(momentObj).unix();
    momentObj = momentObj - currentUnixTime;

    if ( momentObj <= 0 ) {
        expired += 1;
    } else if ( momentObj <= 259200 ){
        shortDate += 1;
    } else {
        allGood +=1
    }

    unixExpiryDatesArray.push(momentObj)
  }

  // Set Pie Chart Data
  const dataSet = {
    datasets: [
      {
        data: [expired, shortDate, allGood],
        backgroundColor: ["#DC2626", "#D97706", "#65A30D"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-green-600">Pantry Status</h1>

      <div className="flex flex-col justify-between items-center wrap">
        <div className="m-4 mt-8 h-64 w-64">
          <Pie className="" data={dataSet} width={"100%"}  height={"100%"}
  options={{ maintainAspectRatio: false }}/>
        </div>
        <div class="overflow-hidden shadow-lg rounded-lg">
  <table class="table-fixed w-full">
    <thead>
      <tr class="bg-gray-100">
        <th class="px-6 py-3 text-left text-s font-medium text-black-500 uppercase tracking-wider">
          Key
        </th>
      </tr>
    </thead>

    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 bg-red-600 rounded-md">
          <div class="text-black text-center">Expired</div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 bg-amber-600 rounded-md">
          <div class="text-black text-center">Expires Soon</div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 bg-lime-600 rounded-md">
          <div class="text-black text-center">Good</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        {/* <div>
          <table className="table-fixed">
            <thead>
              <tr className="m-2 px-12">
                <th>Key</th>
              </tr>
            </thead>

            <tbody>
              <tr className="m-2">
                <td className="bg-red-600 p-3 px-12 text-center font-semibold">
                  Expired
                </td>
              </tr>
              <tr className="m-2">
                <td className="bg-amber-600 p-3 px-12 text-center font-semibold">
                  Expires Soon
                </td>
              </tr>
              <tr className="m-2">
                <td className="bg-lime-600 p-3 px-12 text-center font-semibold">
                  Good
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}

export default PieCharts;
