import React, { useContext, useState } from "react";
import zones from "../data/data";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const Zone = () => {
  const {
    place: selectedZone,
    setPlace: setSelectedZone,
    setPrice,
  } = useContext(Context);
  const [error, setError] = useState(false);
  const navegacion = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedZone(event.target.value);
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedZone === "") {
      setError(true);
      return;
    }
    setPrice(zones.find((zone) => zone.lugar === selectedZone).precio);
    navegacion("/main");
  };
  return (
    <>
      <form className="p-4" onSubmit={handleSubmit}>
        <header className="flex mb-8">
          <h2>Selecciona la zona a visitar:</h2>
          <button className="border-2" type="submit">
            Enviar
          </button>
          {error && (
            <p style={{ color: "red" }}>Por favor, selecciona una opción</p>
          )}
        </header>

        <div className="grid grid-cols-4 gap-4 ">
          {zones.map((zone) => (
            <div key={zone.lugar}>
              <label htmlFor="radio" className="flex flex-col items-center">
                <input
                  type="radio"
                  value={zone.lugar}
                  checked={selectedZone === zone.lugar}
                  onChange={handleOptionChange}
                  id="radio"
                />
                <span>{zone.lugar}</span>
                <span>({zone.precio}$)</span>
              </label>
              <img className="w-full" src={zone.imagen} alt={`${zone.lugar}`} />
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default Zone;
