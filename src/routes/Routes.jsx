import React from "react";
import {
  BrowserRouter as Router,
  Routes as RRoute,
  Route,
} from "react-router-dom";

const Routes = () => {
  return (
    <RRoute>
      <Route path="/" element={<h1>INICIO</h1>} />
      <Route path="/phrase" element={<h1>FRASES SIUUU</h1>} />
      <Route path="/date" element={<h1>DATOS SIUUU</h1>} />
      <Route path="/create" element={<h1>CREAR SIUUU</h1>} />
    </RRoute>
  );
};

export default Routes;
