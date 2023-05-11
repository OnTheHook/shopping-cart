import CartItemCard from "./CartItemCard";
import Subtotal from "./Subtotal"

const Cart = (props) => {
    const costAmountArray = props.items.map((item)=>{
        return {cost: item.cost, amount: item.amount}
    })

  return (
    <div>
      {props.items.map((item) => {
        return (
          <CartItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            amount={item.amount}
            onDelete={props.deleteItem.bind(null, item.id)}
          />
        );
      })}
      <Subtotal items={costAmountArray} />
    </div>
  );
};

export default Cart;
