import React from "react";
import FooterListingUtil from "./FooterListingUtil";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.png";
import pinterest from "../assets/pinterest.svg";
import google from "../assets/google.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const subsidaries1 = [
    "About us",
    "Our Service",
    "Work with Us",
    "FAQ",
    "Contact Us",
  ];
  const subsidaries2 = [
    "About us",
    "Our Service",
    "Work with Us",
    "FAQ",
    "Contact Us",
  ];
  const subsidaries3 = [
    "About us",
    "Our Service",
    "Work with Us",
    "FAQ",
    "Contact Us",
  ];

  return (
    <div className="flex flex-col ">
      <div className="max-sm: pt-2 sm:hidden">
        <MobileFooter />
      </div>

      <div className="grid sm:grid-cols-4 w-[97vw] p-11 px-9 ">
        <div className="max-md:hidden">
          <FooterListingUtil title="Hobbycue" textArr={subsidaries1} />
        </div>
        <div className="max-md:hidden">
          <FooterListingUtil title="How Do I" textArr={subsidaries2} />
        </div>
        <div className="max-md:hidden">
          <FooterListingUtil title="Quick Links" textArr={subsidaries3} />
        </div>

        <div className="flex flex-col gap-4">
          <span className="py-2 text-lg font-bold tracking-wider">
            Social Media
          </span>
          <div className="flex  items-center justify-around gap-1 mx-auto">
            <div className="rounded-full bg-gray-500">
              <img src={facebook} alt="facebook" className="scale-[1.4]" />
            </div>
            <div className="rounded-full bg-gray-500 scale-[1.1]  ml-2">
              <img src={twitter} alt="twitter" className="" />
            </div>
            <div className="rounded-full bg-gray-500 scale-[0.6]">
              <img src={insta} alt="insta" className="" />
            </div>
            <div>
              <img
                src={pinterest}
                alt="pinterest"
                className="opacity-50 scale-150"
              />
            </div>
            <div className="rounded-full p-1 bg-gray-200 scale-[0.9] ml-1">
              <img src={google} alt="google" className="opacity-50 " />
            </div>
            <div className="rounded-full p-1 bg-gray-200 scale-[1.2]">
              <img src={youtube} alt="youtube" className="opacity-50" />
            </div>
            <div className="rounded-full p-1 bg-gray-200 scale-[1.1] mx-1">
              <img src={telegram} alt="telegram" className="opacity-50" />
            </div>
            <div className="rounded-full p-1 bg-gray-200 scale-[1.1] mx-1">
              <EmailIcon sx={{ opacity: "50%" }} />
            </div>
          </div>

          <div className="flex flex-col max-md:justify-center ">
            <span className="py-2 text-lg font-bold tracking-wider">
              Invite Friends
            </span>
            <div className="p-2 flex max-md:mx-auto scale-75">
              <input
                className="p-[0.3rem] rounded-l-lg bg-gray-100 px-3 border-[#8064A2] border-b-[0.27rem] border-t-none outline-none "
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
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[9vh] bg-gray-200 flex items-center justify-center font-semibold tracking-wider text-black rounded-b-full max-md:text-xs">
        <div>&copy; Purple Cues Private Limited</div>
      </div>
    </div>
  );
};

export default Footer;
