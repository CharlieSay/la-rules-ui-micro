import Account from "./account";
import NavBarLogo from "./itv-logo";
import NavBar from "./nav-bar";
import "./header.style.scss";

const Header = () => (
  <header className="fluid">
    <nav className="navbar header-restriction">
      <NavBarLogo />
      <NavBar />
      <Account />
    </nav>
  </header>
);
export default Header;
