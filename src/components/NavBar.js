import { CarWidget } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div class="topnav">
      <a class="active" style={{ borderRight: "5px solid #378587" }}>
        <NavLink to={`/`}>NFT | Store</NavLink>
      </a>
      <a href="#news">
        <NavLink to={`/news`}>News</NavLink>
      </a>
      <a href="#contact">
        <NavLink to={`/contact`}>Contact</NavLink>
      </a>
      <a href="#about">
        <NavLink to={`/about`}>About</NavLink>
      </a>
      <NavLink to={`/cart`} style={{ float: "right" }}>
        <CarWidget />
      </NavLink>
    </div>
  );
};
