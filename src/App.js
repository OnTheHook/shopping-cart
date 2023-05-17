import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";
import {
  smallSteps,
  beStronger,
  far,
  challenge,
  dontBeAfraid,
  excellence,
  smiles,
  beKind,
  dreamers,
  tough,
  smallStepsToo,
  sheBelieved,
  amazing,
} from "./images/files";

const itemsList = [
  { id: 0, name: "Small Steps", cost: 49, amount: 0, image: smallSteps },
  { id: 1, name: "Be Stronger", cost: 30, amount: 0, image: beStronger },
  { id: 2, name: "Far", cost: 41, amount: 0, image: far },
  { id: 3, name: "Challenge", cost: 31, amount: 0, image: challenge },
  { id: 4, name: "Don't Be Afraid", cost: 48, amount: 0, image: dontBeAfraid },
  { id: 5, name: "Excellence", cost: 32, amount: 0, image: excellence },
  { id: 6, name: "Smiles", cost: 18, amount: 0, image: smiles },
  { id: 7, name: "Be Kind", cost: 11, amount: 0, image: beKind },
  { id: 8, name: "Dreamers", cost: 25, amount: 0, image: dreamers },
  { id: 9, name: "Tough", cost: 48, amount: 0, image: tough },
  {
    id: 10,
    name: "Small Steps Too",
    cost: 24,
    amount: 0,
    image: smallStepsToo,
  },
  { id: 11, name: "She Believed", cost: 45, amount: 0, image: sheBelieved },
  { id: 12, name: "Amazing", cost: 38, amount: 0, image: amazing },
];

function App() {
  const [items, setItems] = useState([]);

  const addItem = (id, quantity) => {
    setItems((prev) => {
      let newItemArray;

      let addItem = itemsList.filter((item) => {
        return item.id === id;
      })[0];

      let itemInCart = items.filter((item) => {
        return item.id === id;
      })[0];

      if (itemInCart === undefined) {
        newItemArray = [...prev, { ...addItem, amount: quantity }];
        console.log(newItemArray);
        return newItemArray;
      } else {
        let index = prev.indexOf(itemInCart);
        newItemArray = [...prev];
        newItemArray[index].amount = prev[index].amount + quantity;
        return newItemArray;
      }
    });
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const incrementDecrementAmount = (id, quantity) => {
    setItems((prev) => {
      let newItemArray;
      let itemInCart = items.filter((item) => {
        return item.id === id;
      })[0];
      let index = prev.indexOf(itemInCart);
      newItemArray = [...prev];
      newItemArray[index].amount = quantity;
      return newItemArray;
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation items={items} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop addItem={addItem} itemsList={itemsList} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                changeAmount={incrementDecrementAmount}
                items={items}
                deleteItem={deleteItem}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
