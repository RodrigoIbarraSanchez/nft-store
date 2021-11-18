import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    onAdd(count);
  };

  return (
    <>
      <div style={{ marginTop: 30 }}>
        <p className="stockDisponible">Stock disponible: {stock}</p>
        <div className="buttons">
          <button onClick={handleDecrement} className="decrementoItem">
            -
          </button>
          <span className="cantidadItem">{count}</span>
          <button onClick={handleIncrement} className="incrementoItem">
            +
          </button>
        </div>
      </div>
    </>
  );
};
