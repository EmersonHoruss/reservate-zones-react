import React from "react";
import { Routes, Route } from "react-router-dom";
import Zone from "../pages/Zone";
import Main from "../pages/Main";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Zone />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </>
  );
};

export default Router;
