import React from "react";

const Card = ({ add, icon, title, color, description, buttonText }) => {
  console.log(color);
  console.log(`bg-[${color}]`);
  return (
    <div className={`flex flex-col border-[0.1rem] border-gray-300 rounded-lg p-4 gap-2 hover:bg-[${color}] shadow-sm shadow-gray-500 bg-white/70 backdrop-blur-sm md:min-h-[24vh] md:max-w-5xl mx-auto`}>
      <div className={`flex gap-2 font-semibold items-center`}>
        <span className={`text-[${color}] scale-[1.2]`}>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="pl-1 tracking-wide text-sm mb-4">
        {description}
      </div>
      <div className="flex ml-auto scale-[0.9] ">
        {buttonText}
      </div>
    </div>
  );
};

export default Card;
