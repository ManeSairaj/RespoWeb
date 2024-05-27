import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Button from "../src/components/Button/Button";

const Db = [
  {
    icon: <GroupsIcon />,
    title: "People",
    color: "#b35fd9",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ut autem aspernatur voluptatibus. Natus voluptatibus quis, voluptas molestias nemo doloremque.",
    buttonText: <Button text="connect" />,
  },
  {
    icon: <LocationOnIcon />,
    title: "Place",
    color: "#307a27",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ut autem aspernatur voluptatibus. Natus voluptatibus quis, voluptas molestias nemo doloremque.",
    buttonText: <Button text="Meet up" />,
  },
  {
    icon: <ShoppingBasketIcon />,
    title: "Product",
    color: "#3277b3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ut autem aspernatur voluptatibus. Natus voluptatibus quis, voluptas molestias nemo doloremque.",
    buttonText: <Button text="Get it" />,
  },
  {
    icon: <EventAvailableIcon />,
    title: "Program",
    color: "#b74141",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ut autem aspernatur voluptatibus. Natus voluptatibus quis, voluptas molestias nemo doloremque.",
    buttonText: <Button text="Attend" />,
  },
];

export default Db;
