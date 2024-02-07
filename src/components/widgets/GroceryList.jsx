import "../auth/css/dashboard.css";

function GroceryList() {
  return (
<>
      <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-lime-500">
        {" "}
        Grocery List{" "}
      </h1>
      <ul className="m-10 font-bold">
        <li>Milk</li>
        <li>Bread</li>
        <li>Eggs</li>
      </ul>
      </>
  );
}

export default GroceryList;
