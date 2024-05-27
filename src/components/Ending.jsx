import React from "react";
import endingImage from "../assets/endingImage.jpg";
import { Button } from "@mui/material";

const Ending = () => {
  return (
    <div className="bg-sky-100 sm:p-14 p-4">
      <div className="italic flex px-5 py-4 md:text-3xl tracking-wider font-medium mx-auto max-md:flex-col">
        <div className="flex mx-auto">
          Your&nbsp;<div className="text-[#601eb0]">Hobby</div>,&nbsp;Your&nbsp;
          <div className="text-sky-600">Community...</div>
        </div>

        <div className="max-md:scale-[0.6] scale-[1.2] text-nowrap max-md:mx-auto lg:-translate-y-4">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#601eb0",
              borderRadius: "0.7rem",
              marginLeft: "auto",
              padding: "0.7rem 1.2rem"
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <img
        src={endingImage}
        alt="endingImage"
        className="rounded-full flex mx-auto "
      />
    </div>
  );
};

export default Ending;
