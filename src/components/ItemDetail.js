import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  return (
    <>
      <div className="contenedor" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div>
              <img
                className="ItemdetailImage"
                src={data[itemId].pictureUrl}
                alt="NTF"
              ></img>
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
                      <p>{data[itemId].description}</p>
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
            <h1 style={{ textAlign: "left" }}>{data[itemId].title}</h1>
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
                  {data[itemId].price}
                  <span style={{ color: "grey", fontSize: 16 }}>
                    {" "}
                    ($189.04)
                  </span>
                </h3>
                <a href="#" class="btn btn-primary">
                  Buy Now!
                </a>
                <a
                  style={{ color: "#06D3D7", borderColor: "#06D3D7" }}
                  href="#"
                  class="btn btn-outline-primary"
                  style={{ marginLeft: 10 }}
                >
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
