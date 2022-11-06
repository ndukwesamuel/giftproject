import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page1Detail from "./Page1Detail";
import UserRepo from "./UserRepo";

function RoutePAge1() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/repo" element={<UserRepo />} />

      <Route exact path="/:id" element={<Page1Detail />} />
    </Routes>
  );
}

export default RoutePAge1;
