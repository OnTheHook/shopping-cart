import CartItemCard from "./CartItemCard";

const Cart = (props) => {
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
          />
        );
      })}
    </div>
  );
};

export default Cart;
