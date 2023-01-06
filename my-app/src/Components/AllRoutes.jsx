import React from "react";
import { Route, Routes } from "react-router-dom";
import All from "../Pages/All";
import CSS from "../Pages/Css";
import Home from "../Pages/Home";
import HTML from "../Pages/Html";
import JavaScript from "../Pages/JavaScript";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/javascript" element={<JavaScript />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
