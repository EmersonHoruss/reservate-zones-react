import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/main" element={<Main />}></Route> */}
      </Routes>
    </>
  );
};

export default Router;
