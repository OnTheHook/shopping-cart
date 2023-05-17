import ItemCard from "./ItemCard";

const Shop = (props) => {
  const handleAddItem = (itemInfo) => {
    props.addItem(itemInfo.id, parseInt(itemInfo.amount));
  };
  console.log(props.itemsList);
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center" data-testid="shop">
      {props.itemsList.map((item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            image={item.image}
            onAddItem={handleAddItem}
          />
        );
      })}
    </div>
  );
};

export default Shop;
