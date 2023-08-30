import { Link } from "react-router-dom";
import useItems from "../hook/useItems";
import Item from "../Item/Item";

const Items = () => {
  const [items] = useItems();
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-28 text-5xl text-rose-700 text-center">
          Our Inventory
        </h2>
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>

        <div>
          <Link
            className="mt-2 bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded  justify-center content-center flex items-center"
            to="/manageinventories"
          >
            Manage Inventories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;

// phind
