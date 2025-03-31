import "./css/Header.css";
import Navigation from "./Navigation";

function Header({ isHome }) {
    return(
        <header className={isHome ? "header-home" : "header-default"}>
            <div className="top-bar"></div>
            <h1>5 Years of Fashion</h1>
            <Navigation isHome={isHome} />
        </header>
    );
};

export default Header;
