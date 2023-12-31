import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            <div>SHOP</div>
          </Link>
          <Link to="/sign-in" className="nav-link">
            <div>SIGN IN</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
