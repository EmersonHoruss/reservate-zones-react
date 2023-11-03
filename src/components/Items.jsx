import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { types } from "../context/types";

const Items = () => {
  const { name, setName, rooms, setRooms, people, setPeople, days, setDays } =
    useContext(Context);
  const [currentField, setCurrentField] = useState(types.name);
  const handleSubmit = (event) => {
    event.preventDefault();
    switch (currentField) {
      case types.name:
        setCurrentField(types.rooms);
        break;
      case types.rooms:
        setCurrentField(types.people);
        break;
      case types.people:
        setCurrentField(types.days);
        break;
      case types.days:
        setCurrentField(types.finish);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {
        <form onSubmit={handleSubmit}>
          {currentField === types.name ? (
            <div>
              <label htmlFor="name">Escribe tu nombre y apellido: {name}</label>
              <input
                className="border rounded-md p-2"
                autoFocus
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="name">
                ¿Cuántas habitaciones quieres?: {rooms}
              </label>
              <input
                type="number"
                value={rooms}
                onChange={(e) => {
                  setRooms(parseInt(e.target.value));
                }}
              />
            </div>
          )}
          <button className="border-2" type="submit">
            Enviar
          </button>
        </form>
      }
    </>
  );
};

export default Items;
