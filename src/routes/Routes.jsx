import React from "react";
import { Routes as RRoute, Route } from "react-router-dom";
import Create from "../pages/Create";
import Date from "../pages/Date";
import Home from "../pages/Home/Home";
import Phrase from "../pages/Phrase";

const Routes = () => {
  return (
    <RRoute>
      <Route path="/" element={<Home />} />
      <Route path="/phrase" element={<Phrase />} />
      <Route path="/date" element={<Date />} />
      <Route path="/create" element={<Create />} />
    </RRoute>
  );
};

export default Routes;
