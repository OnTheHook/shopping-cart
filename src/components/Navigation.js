import "./Navigation.css";
import { Link } from "react-router-dom";
import shoppingBag from "../images/shopping-bag.png";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <Link to="/">
          <li>
            <h1>Motivate</h1>
          </li>
        </Link>
        <Link to="/shop">
          <li>
            <h3>Shop</h3>
          </li>
        </Link>
        <Link to="/cart">
          <li className="shopping-bag-display">
            <div>
              <img
                className="shopping-bag"
                src={shoppingBag}
                alt="shopping bag"
              />
            </div>
            <div className="flex items-center justify-center absolute top-3 right-1 rounded-full bg-red-600 text-white font-bold font-xs w-6 h-6">{props.items.length > 0 && props.items.length}</div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
