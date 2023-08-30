import { useEffect, useState } from "react";
const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fitness-warehouse-server-1.onrender.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItems;

// import { useEffect, useState } from "react";

// const useItems = () => {
//   const [items, setItems] = useState([]);

//   const fetchItems = async () => {
//     try {
//       const response = await fetch(
//         "https://fitness-warehouse-server-1.onrender.com/items"
//       );
//       const data = await response.json();
//       setItems(data);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   return items;
// };

// export default useItems;
