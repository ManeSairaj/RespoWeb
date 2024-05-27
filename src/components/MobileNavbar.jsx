import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const MobileNavbar = () => {
  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className=""
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="bg-[#8064A2] text-black" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobileNavbar;
