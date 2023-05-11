import { useState } from "react";
import "./ItemCard.css";
import productImage from "../images/dummy-image.jpeg";

const ItemCard = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      props.onAddItem({id: props.id, amount: quantity});
    }
    setQuantity(0)
  };

  return (
    <div className="item-card">
      <div className="image-container">
        <img className="product-image" src={productImage} alt="productImage" />
      </div>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className="product-price-quantity">
        <div>$100</div>
        <form onSubmit={handleSubmit}>
          <div>
            +
            <input
              className="quantity"
              type="number"
              value={quantity}
              min="0"
              step="1"
              onChange={handleChange}
            />
            -
          </div>
          <div>
            <button type="submit" className="bg-blue-500">
              Add To Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemCard;
