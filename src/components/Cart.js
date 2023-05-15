import CartItemCard from "./CartItemCard";
import Subtotal from "./Subtotal"

const Cart = (props) => {
    const costAmountArray = props.items.map((item)=>{
        return {cost: item.cost, amount: item.amount}
    })

  return (
    <div className="p-4">
      <h1 className="font-semibold text-2xl">Shopping Cart</h1>
      <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
      {props.items.map((item) => {
        return (
          <CartItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            amount={item.amount}
            image={item.image}
            changeAmount={props.changeAmount}
            onDelete={props.deleteItem.bind(null, item.id)}
          />
        );
      })}
      <Subtotal items={costAmountArray} />
    </div>
  );
};

export default Cart;
