import React from "react";
import Items from "../components/Items";
import Summary from "../components/Summary";

const Main = () => {
  return (
    <div className="grid grid-cols-[auto_300px]">
      <Items />
      <Summary />
    </div>
  );
};

export default Main;
