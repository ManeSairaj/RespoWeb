import React from "react";
import Db from "../../temp/Db";
import Card from "./Card";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "./Button/Button";

const Showcase = () => {
  return (
    <div>
      <div className="grid p-[2.7rem] max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Db.map((cardInfo, index) => (
          <Card key={index} {...cardInfo} />
        ))}
      </div>
      <div className="p-20 max-md:p-9 bg-sky-100 min-h-[30vh]">
        <Card add icon={<AddCircleIcon />} title={'Add your own'} color={`#b74141`} description={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ut autem aspernatur voluptatibus. Natus voluptatibus quis, voluptas molestias nemo doloremque.`} buttonText={<Button text="Add Now" />} />
      </div>
    </div>
  );
};

export default Showcase;
