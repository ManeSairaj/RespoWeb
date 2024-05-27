import React from "react";
import cartoon from "../assets/cartoons.jpg";

const Hero = () => {
  return (
    <div className="flex relative bg-[#f1dcfb] h-fit ">
      <div className="">
        <div className="w-[87vw] md:w-[57vw] flex flex-col md:pl-16 max-md:px-9 max-md:pt-4 md:pt-20">
          <div className="text-nowrap text-[1.2rem] md:text-[2.3rem]  italic font-semibold">
            Explore your&nbsp;
            <span className="text-sky-400">hobby</span>
            &nbsp;or&nbsp;<span className="text-[#624684]">passion</span>
          </div>
          <div className="py-6 flex flex-col gap-4 text-xs md:text-sm text-gray-600">
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              molestiae aliquid corrupti, quod voluptas, provident sunt,
              aspernatur atque quas saepe id obcaecati placeat? Aspernatur
              velit, recusandae magnam deleniti consequatur cumque? Ipsa esse
              animi voluptatum repellendus omnis, perspiciatis minima aspernatur
              culpa vero rerum possimus eum est saepe.
            </div>
            <div>
              Laboriosam, quaerat reiciendis earum corrupti consequuntur
              voluptate obcaecati expedita dignissimos doloremque facilis
              accusantium consequatur.
            </div>
          </div>
        </div>
        <div className=" mx-auto w-[57vw] max-md:w-[100vw]  border-b-[#3296d5] border-b-[1.2rem]">
          <img src={cartoon} alt="cartoons" className="rounded-tr-full"/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
