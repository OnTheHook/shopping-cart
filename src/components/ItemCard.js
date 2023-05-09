import "./ItemCard.css";
import productImage from "../images/dummy-image.jpeg"

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <div className="image-container"><img className="product-image" src={productImage} alt="productImage" /></div>
      <div><h3>Sailor Moon</h3></div>
      <div className="product-price-quantity">
        <div>$100</div>
        <div>+<input className="quantity" type="number" value={0}></input>-</div>
      </div>
    </div>
  );
};

export default ItemCard;
