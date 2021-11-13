import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../fontawesome";

const imgs = [
  "https://estaticos-cdn.elperiodico.com/clip/99ee15c4-e35a-4ed2-a9c8-e430ba68f018_source-aspect-ratio_default_0.jpg",
  "https://media.kasperskydaily.com/wp-content/uploads/sites/87/2021/09/23141434/nft-2.jpg",
  "https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/18/60539e3985667.jpeg",
  "https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
];

const data = [
  {
    id: "001",
    title: "NFT-Title-1",
    price: "0.1 ETH",
    pictureUrl: imgs[0],
  },
  {
    id: "002",
    title: "NFT-Title-2",
    price: "0.2 ETH",
    pictureUrl: imgs[1],
  },
  {
    id: "003",
    title: "NFT-Title-3",
    price: "0.5 ETH",
    pictureUrl: imgs[2],
  },
  {
    id: "004",
    title: "NFT-Title-4",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
  {
    id: "005",
    title: "NFT-Title-5",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
  {
    id: "006",
    title: "NFT-Title-6",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
  {
    id: "007",
    title: "NFT-Title-7",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
  {
    id: "008",
    title: "NFT-Title-8",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
  {
    id: "009",
    title: "NFT-Title-9",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
  {
    id: "010",
    title: "NFT-Title-10",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
  },
];

const Producto = ({ id, title, price, pictureUrl }) => {
  return (
    <>
      <div className="contenedorItem">
        <img src={imgs[1]} alt="NTF"></img>
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
          <span className="likeItem">
            <FontAwesomeIcon icon={faHeart} /> 0
          </span>
        </div>
      </div>
    </>
  );
};

export const Item = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
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
  });

  return (
    <>
      {productos &&
        productos.map(({ id, title, price }) => (
          <Producto key={title} id={id} title={title} price={price} />
        ))}
    </>
  );
};
