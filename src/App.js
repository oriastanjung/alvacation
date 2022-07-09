import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import LoginPage from "pages/LoginPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/example" element={<Example />}></Route>
        </Routes>
        <Routes>
          <Route path="/properties/:id" element={<DetailsPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
