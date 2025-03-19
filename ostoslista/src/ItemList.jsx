const ItemList = ({ items, onRemoveItem }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => onRemoveItem(item)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };
  
export default ItemList;
  