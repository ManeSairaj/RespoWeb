import React from "react";
import { Button as Btn } from "@mui/material";

const Button = ({ text }) => {
  return (
    <Btn
      variant="outlined"
      style={{
        border: "1px solid #8064A2",
        color: "#8064A2",
        padding: "0.4rem 1.4rem",
        borderRadius: "5rem",
      }}
      className="hover:shadow-md shadow-[#8064A2]"
    >
      {text}
    </Btn>
  );
};

export default Button;
