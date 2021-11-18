import { Link, useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../fontawesome";

export const ItemListContainer = () => {
  const { itemId } = useParams();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" style={{ paddingLeft: "none" }}>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Categories
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul style={{ listStyle: "none" }}>
                      <Link to="/category/art">
                        <li>
                          <a class="categoryItem" href="#">
                            <FontAwesomeIcon icon={["fas", "palette"]} />
                            <span style={{ marginLeft: 5 }}>Art</span>
                          </a>
                        </li>
                      </Link>
                      <Link to="/category/music">
                        <li>
                          <a class="categoryItem" href="">
                            <FontAwesomeIcon icon={["fas", "music"]} />
                            <span style={{ marginLeft: 5 }}>Music</span>
                          </a>
                        </li>
                      </Link>
                      <Link to="/category/virtual-worlds">
                        <li>
                          <a class="categoryItem" href="">
                            <FontAwesomeIcon icon={["fas", "globe-americas"]} />
                            <span style={{ marginLeft: 5 }}>
                              Virtual Worlds
                            </span>
                          </a>
                        </li>
                      </Link>
                      <Link to="/category/trading-cards">
                        <li>
                          <a class="categoryItem" href="">
                            <FontAwesomeIcon icon={["fas", "exchange-alt"]} />
                            <span style={{ marginLeft: 5 }}>Trading Cards</span>
                          </a>
                        </li>
                      </Link>
                      <Link to="/category/collectibles">
                        <li>
                          <a class="categoryItem" href="">
                            <FontAwesomeIcon icon={["fas", "laptop"]} />
                            <span style={{ marginLeft: 5 }}>Collectibles</span>
                          </a>
                        </li>
                      </Link>
                      <Link to="/category/sports">
                        <li>
                          <a class="categoryItem" href="">
                            <FontAwesomeIcon icon={["fas", "futbol"]} />
                            <span style={{ marginLeft: 5 }}>Sports</span>
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <ItemList />
          </div>
        </div>
      </div>
    </>
  );
};
