import { useState } from "react";
import "./ItemCard.css";


const ItemCard = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      props.onAddItem({ id: props.id, amount: quantity });
    }
    setQuantity(0);
  };

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={props.image} alt="productImage" />

      <div className="flex flex-col items-center ">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </div>
        <div>${props.cost}</div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              
              <input
                className="quantity"
                type="number"
                value={quantity}
                min="0"
                step="1"
                onChange={handleChange}
              />
              
            </div>
            <div>
              <button className="mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="submit">
                Add To Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
