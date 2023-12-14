import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home";
import NotFound from "./404";
import PageLayout from "./PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
