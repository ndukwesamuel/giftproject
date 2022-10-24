import React from "react";

import { Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page1Detail from "./Page1Detail";

function RoutePAge1() {
  return (
    <Routes>
      <Route exact path="/" element={<Page1 />} />
      <Route exact path="/:id" element={<Page1Detail />} />
    </Routes>
  );
}

export default RoutePAge1;
