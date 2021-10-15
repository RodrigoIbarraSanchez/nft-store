import { CarWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <div class="topnav">
            <a class="active" href="#home">NTF | Store</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <CarWidget />
        </div>
    );
}

