import { useState } from "react";

export const ItemCount = () => {

    const stock = 10;

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const handleDecrement = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    }


    return (
        <>
        <div className="contenedorItem">
            <p>Producto 1</p>
            <p className="stockDisponible">Stock disponible: {stock}</p>
            <div className="buttons">
                <button onClick={handleDecrement} className="decrementoItem">-</button>
                <span className="cantidadItem">{count}</span>
                <button onClick={handleIncrement} className="incrementoItem">+</button>
            </div>
        </div>
        </>
    );
}