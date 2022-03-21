import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwn } from "../../src/assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to="/">
          <Crwn className="logo"></Crwn>
        </Link>
        <div className='nav-links-container'>
          
          <Link className="nav-link" to='/signin'>
            Sign-IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
