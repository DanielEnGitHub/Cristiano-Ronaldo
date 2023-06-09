import React from "react";
import { Routes as RRoute, Route } from "react-router-dom";
import Date from "../pages/Date";
import Extra from "../pages/Extra";
import Home from "../pages/Home/Home";
import Main from "../pages/Main";
import Phrase from "../pages/Phrase";

const Routes = () => {
  return (
    <RRoute>
      <Route
        path="/"
        element={
          <Main isHome>
            <Home />
          </Main>
        }
      />
      <Route
        path="/phrase"
        element={
          <Main showBG>
            <Phrase />
          </Main>
        }
      />
      <Route
        path="/information"
        element={
          <Main showBG>
            <Date />
          </Main>
        }
      />
      <Route
        path="/extra"
        element={
          <Main isHome>
            <Extra />
          </Main>
        }
      />
    </RRoute>
  );
};

export default Routes;
