import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Shop from './components/Shop';

const itemsList = [
  {id: 1, name: "Sailor Moon", cost: 10,},
  {id: 2, name: "Guts", cost: 20,},
  {id: 3, name: "Goku", cost: 30,},
  {id: 4, name: "Vash", cost: 20,},
  {id: 5, name: "Naruto", cost: 25,},
]

function App() {
  const [items, setItems] = useState([])


const addItem = () => {
  
}




  return (
    <div className="App">
      <Navigation />
      <Shop />
      
    </div>
  );
}

export default App;
