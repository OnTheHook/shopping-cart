import "./Navigation.css";
import shoppingBag from "../images/shopping-bag.png";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <h1>Logo</h1>
        </li>
        <li>
          <h3>Shop</h3>
        </li>
        <li className="shopping-bag-display">
          <div>
            <img
              className="shopping-bag"
              src={shoppingBag}
              alt="shopping bag"
            />
          </div>
          <div>{props.items.length > 0 && props.items.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
