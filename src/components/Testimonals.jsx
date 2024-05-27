import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import profile from "../assets/image.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Slider } from "@mui/material";

const Testimonals = () => {
  return (
    <div className="p-11">
      <div className="bg-[#f3e9ff] rounded-sm p-2">
        <div className="p-2">
          <div className="flex gap-2 font-semibold tracking-wider">
            <FormatQuoteIcon style={{ color: "#9744fc", scale: "1.2" }} />{" "}
            Testimonials
          </div>
          <div className="flex gap-2 text-xs p-[2vw] tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            error harum labore, quidem blanditiis ad, temporibus tempora tenetur
            veritatis laboriosam nisi minus atque delectus consequuntur illo
            perspiciatis, neque doloribus dolorum.
          </div>
          <div className="flex max-md:flex-col-reverse mx-auto p-2">
            <div className="bg-[#fff]/50 py-2 sm:px-4 max-sm:px-5 sm:max-w-[52vw] max-md:mx-auto max-sm:mx-0 rounded-md flex items-center justify-center gap-4 max-md:scale-[0.7] max-sm:rounded-full backdrop-blur-sm">
              <PlayCircleOutlineIcon sx={{ scale: "1.4", color: "#9744fc" }} />
              <Box sx={{ width: "30vw", height: "auto" }}>
                <div className="translate-y-[9%]">
                  <Slider
                    sx={{ color: "#9744fc", margin: "auto" }}
                    defaultValue={10}
                  />
                </div>
              </Box>
              <div className="text-[#9744fc] text-xs tracking-wider">0:00</div>
              <img src={profile} width={32} alt="" className="rounded-full" />
            </div>
            <div className="flex sm:gap-4 max-md:mx-auto max-md:flex-col items-center justify-center mx-auto ">
              <img
                src={profile}
                width={52}
                alt=""
                className="rounded-full scale-[1.2]"
              />
              <div className="p-2">
                <div className="text-sm font-bold tracking-wider text-[#601eb0]">
                  Mr. A B C
                </div>
                <div className="text-xs font-semibold text-sky-500 opacity-70">
                  Gym Trainer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
