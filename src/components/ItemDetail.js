import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "002",
    title: "NFT-Title-2",
    price: "0.2 ETH",
    pictureUrl: imgs[1],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "003",
    title: "NFT-Title-3",
    price: "0.5 ETH",
    pictureUrl: imgs[2],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "004",
    title: "NFT-Title-4",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "005",
    title: "NFT-Title-5",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "006",
    title: "NFT-Title-6",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "007",
    title: "NFT-Title-7",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "008",
    title: "NFT-Title-8",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "009",
    title: "NFT-Title-9",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "010",
    title: "NFT-Title-10",
    price: "0.3 ETH",
    pictureUrl: imgs[3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const ItemDetail = () => {
  return (
    <>
      <div className="contenedor" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div>
              <img className="ItemdetailImage" src={imgs[1]} alt="NTF"></img>
              <br />
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Description
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>{data[0].description}</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Properties
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      About
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h1 style={{ textAlign: "left" }}>{data[0].title}</h1>
            <div class="card">
              <div class="card-body">
                <h6 class="card-title" style={{ color: "grey" }}>
                  Sale ends November 25, 2021 at 3:14 CST
                </h6>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Current price</h6>
                <h3 class="card-text">
                  <FontAwesomeIcon
                    style={{ fontSize: 30 }}
                    className="ethIcon"
                    icon={["fab", "ethereum"]}
                  />
                  0.0405
                  <span style={{ color: "grey", fontSize: 16 }}>
                    {" "}
                    ($189.04)
                  </span>
                </h3>
                <a href="#" class="btn btn-primary">
                  <FontAwesomeIcon
                    style={{
                      backgroundColor: "#06D3D7",
                      borderColor: "#06D3D7",
                    }}
                    className="ethIcon"
                    icon={["fas", "wallet"]}
                  />
                  Buy Now!
                </a>
                <a
                  style={{ color: "#06D3D7", borderColor: "#06D3D7" }}
                  href="#"
                  class="btn btn-outline-primary"
                  style={{ marginLeft: 10 }}
                >
                  <FontAwesomeIcon className="ethIcon" icon={["fab", "tag"]} />
                  Make offer
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};
