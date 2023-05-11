import "./CartItemCard.css"
import productImage from "../images/dummy-image.jpeg";

const CartItemCard = (props) => {
  return (
    <div className="cart-item-card">
      <div>
        <div className="item-card-bag">
          <div className="image-container">
            <img
              className="product-image"
              src={productImage}
              alt="productImage"
            />
          </div>
          <div className="product-price-quantity">
            <div>
              +<input className="quantity" type="number" value={props.amount}></input>-
              <button className="bg-blue-500" onClick={props.onDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>${props.cost}</div>
    </div>
  );
};


export default CartItemCard