import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../fontawesome";
import { data } from "../data";

const Producto = ({ id, category, title, price, pictureUrl, description }) => {
  return (
    <>
      <div className="contenedorItem">
        <img src={pictureUrl} alt="NTF"></img>
        <div className="contenedorItemInfo">
          <p className="NFTTitle">
            {title} <p className="NFTId">#{id}</p>
          </p>
          <p className="NFTPrice">
            Price:{" "}
            <p className="NFTPriveValue">
              {" "}
              <FontAwesomeIcon
                className="ethIcon"
                icon={["fab", "ethereum"]}
              />{" "}
              {price}
            </p>
          </p>
          <hr />
          <Link to={"/category/" + category}>
            <span>#{category}</span>
          </Link>
          <span className="likeItem">
            <FontAwesomeIcon icon={faHeart} /> 0
          </span>
        </div>
      </div>
    </>
  );
};

export const CategoryItem = () => {
  const [productos, setProductos] = useState(null);
  const { categoryName } = useParams();

  const getData = (dato) =>
    new Promise((resolve, reject) => {
      if (dato) {
        resolve(dato);
        console.log(dato);
      } else {
        reject("No se encontró nada");
      }
    });

  useEffect(() => {
    getData(data)
      .then((res) =>
        categoryName
          ? setProductos(
              res.filter((producto) => producto.category === categoryName)
            )
          : setProductos(data)
      )
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      {productos &&
        productos.map(
          ({ id, category, title, price, pictureUrl, description }) => (
            <Producto
              key={title}
              id={id}
              category={category}
              title={title}
              price={price}
              pictureUrl={pictureUrl}
              description={description}
            />
          )
        )}
    </>
  );
};
