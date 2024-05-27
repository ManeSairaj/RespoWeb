import React from "react";

const FooterListingUtil = ({title, textArr = ["a", "z"]}) => {

  return (
    <div className="flex flex-col p-2 items-start justify-center gap-1">
      <div className="py-2 text-lg font-bold tracking-wider">{title}</div>
      {textArr &&
        textArr?.map((text, index) => <span key={index} className="text-start">{text}</span>)}
    </div>
  );
};

export default FooterListingUtil;
