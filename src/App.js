import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./Page1NextedROute/Page1";
import Page2 from "./Page2";
import Error from "./Error";
import Page3 from "./Page3";

import "./App.css";
import RoutePAge1 from "./Page1NextedROute/RoutePAge1";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" element={<RoutePAge1 />} />

        <Route path="*" element={<Error />} />

        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/page3/*" element={<Page3 />} />
        <Route element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
