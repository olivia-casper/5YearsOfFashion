import {Outlet, useLocation} from "react-router-dom";
import Header from "./components/Header";
import "./components/css/styles.css";  
import "./components/css/years.css";
import "./index.css";

function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/5YearsOfFashion"; // Adjust based on your `basename`

    return (
        <>
            <Header isHome={isHome} />
            <Outlet />
        </>
    );
}

export default Layout;