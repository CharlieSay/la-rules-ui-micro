import { Link, useLocation } from "react-router-dom";
import authenticatedRoutes from "../../../data/routesConfig";
import "./header.style.scss";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      {authenticatedRoutes.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          className={`nav-path ${
            location?.pathname === route.path ? "active-nav-path" : ""
          }`}
        >
          {`${route.name} ${
            location?.pathname === route.path ? "(ACTIVE)" : ""
          }`}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
