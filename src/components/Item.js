import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../fontawesome";
import { data } from "../data";

const Producto = ({ id, category, title, price, pictureUrl, description }) => {
  return (
    <>
      <Link to={`/item/${id - 1}`}>
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
            <Link
              to={"/category/" + category}
              style={{ textDecoration: "none" }}
            >
              <span>#{category}</span>
            </Link>
            <span className="likeItem">
              <FontAwesomeIcon icon={faHeart} /> 0
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export const Item = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    task
      .then(
        (result) => {
          console.log(result);
          setProductos(result);
        },
        (err) => {
          console.log("Error: " + err);
        }
      )
      .then((result) => {
        console.log("Soy el segundo then: " + result);
      })
      .catch((err) => {
        console.log("Soy el catch: ", err);
      })
      .finally(() => {
        console.log("Me ejecuto siempre 🚀");
      });
  }, []);

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
