/** @format */

import React from "react";
import HomePage from "./pages/Home/HomePage.js";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="text-center">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    
    </div>
  );
};

export default App;
