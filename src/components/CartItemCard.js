import { useState } from "react";
import "./CartItemCard.css";

const CartItemCard = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const handleAmountChange = (e) => {
    let newAmount = parseInt(e.target.value);
    setAmount(newAmount);
    props.changeAmount(props.id, newAmount);
  };

  const decrementAmount = () => {
    let newAmount = parseInt(amount) - 1;
    if (newAmount < 1) {
      return;
    }
    setAmount(newAmount);
    props.changeAmount(props.id, newAmount);
  };

  const incrementAmount = () => {
    let newAmount = parseInt(amount) + 1;
    if (newAmount > 99) {
      return;
    }
    setAmount(newAmount);
    props.changeAmount(props.id, newAmount);
  };

  const prevent = (e) => {
    e.preventDefault();
  }
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={props.image} alt={props.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{props.name}</span>
          <span className="text-red-500 text-xs">Motivate Inc.</span>
          <span
            onClick={props.onDelete}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          onClick={decrementAmount}
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-10"
          min="1"
          max="99"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          onKeyDown={prevent}
        />

        <svg
          onClick={incrementAmount}
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${props.cost}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${props.cost * props.amount}</span>
    </div>
  );
};

export default CartItemCard;
