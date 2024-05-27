import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExploreIcon from "@mui/icons-material/Explore";
import StarsIcon from "@mui/icons-material/Stars";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "./Button/Button";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="md:w-95vw shadow-sm shadow-[#553d72]">
      <nav className="navbar bg-white navbar-expand-lg navbar-light p-2 bg-light lg:mx-4 rounded-lg">
        <div className="container-fluid rounded-full ">
          <a className="navbar-brand " href="#">
            <div className="flex gap-2">
              <div className="flex border-[0.27vw] border-gray-400 italic font-bold items-center justify-center p-[0.1rem] px-2 h-[29px] w-[29px] m-auto text-sky-400">
                h
              </div>
              <div className="flex flex-col max-md:text-base">
                <div className="tracking-wider">
                  <span className="italic text-sky-400 font-bold">hubby</span>
                  <span className="italic font-bold">cue</span>
                </div>
                <span className="italic text-gray-300 text-[9px]">
                  Your Hobby, Your Community
                </span>
                <div></div>
              </div>
            </div>
          </a>
          <div className="flex mx-auto">
            <div className="max-md:hidden">
              <form className="d-flex ">
                <input
                  className="p-[0.3rem] rounded-l-lg bg-gray-100 px-3 border-none outline-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="bg-[#8064A2] text-white p-[0.4rem] rounded-r-lg px-[0.6rem]"
                  type="submit"
                >
                  <SearchIcon />
                </button>
              </form>
            </div>
          </div>

          <div className="flex gap-4 mx-auto max-lg:hidden">
            <div className="flex items-center justify-center gap-1 text-[1rem] font-semibold">
              <ExploreIcon style={{ color: "#8064A2" }} /> <span>Explore</span>
              <KeyboardArrowDownIcon style={{ color: "#8064A2" }} />
            </div>
            <div className="flex items-center justify-center gap-1 text-[1rem] font-semibold">
              <StarsIcon style={{ color: "#8064A2" }} />
              <span>Hobbies</span>
              <KeyboardArrowDownIcon style={{ color: "#8064A2" }} />
            </div>
          </div>
          <div className="flex gap-4 mx-auto items-center justify-center max-md:hidden">
            <BookmarkIcon style={{ color: "#8064A2" }} />
            <NotificationsIcon style={{ color: "#8064A2" }} />
            <ShoppingCartIcon style={{ color: "#8064A2" }} />

            <Button text="Sign in" />
          </div>

          <div className="md:hidden flex items-center justify-center gap-4">
            <div>
              <button
                className="text-[#8064A2] "
                type="submit"
              >
                <SearchIcon />
              </button>
            </div>
            <div className="">
              <NotificationsIcon style={{ color: "#8064A2" }} />
            </div>
            <div>
              <MenuIcon style={{ color: "#8064A2" }} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
