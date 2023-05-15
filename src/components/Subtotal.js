const Subtotal = (props) => {
  const subtotal = props.items.reduce((acc, cur) => {
    return acc + cur.cost * cur.amount;
  }, 0);

  return (
    <div className="flex justify-between">
      <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-4 text-sm text-white uppercase">
        Checkout
      </button>
      <h3>
        <strong>Subtotal:</strong> ${subtotal}
      </h3>
    </div>
  );
};

export default Subtotal;
