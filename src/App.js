import "./App.css";
import { useState} from "react";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const itemsList = [
  { id: 0, name: "Sailor Moon", cost: 10, amount: 0},
  { id: 1, name: "Guts", cost: 20, amount: 0 },
  { id: 2, name: "Goku", cost: 30, amount: 0 },
  { id: 3, name: "Vash", cost: 20, amount: 0  },
  { id: 4, name: "Naruto", cost: 25, amount: 0  },
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
        console.log(newItemArray)
        return newItemArray;
      } else {
        let index = prev.indexOf(itemInCart);
        console.log(index)
        newItemArray = [...prev];
        newItemArray[index].amount = prev[index].amount + quantity;
        console.log(newItemArray)
        return newItemArray;
      }
    });
  };

  
  return (
    <div className="App">
      <Navigation items={items} />
      <Shop addItem={addItem} itemsList={itemsList} />
      <Cart items={items}/>
    </div>
  );
}

export default App;
