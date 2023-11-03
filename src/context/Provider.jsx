import React, { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState(0);
  const [people, setPeople] = useState(0);
  const [days, setDays] = useState(0);
  const total = () => {
    return 0;
  };
  return (
    <Context.Provider
      value={{
        place,
        setPlace,
        price,
        setPrice,
        name,
        setName,
        rooms,
        setRooms,
        people,
        setPeople,
        days,
        setDays,
        total,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
