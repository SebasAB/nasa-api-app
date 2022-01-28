import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apod from "../Apod/Apod";
import ApodByDate from "../ApodByDate/ApodByDate.js";
import RandomApod from "../RandomApod/RandomApod.js";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Apod />} />
        <Route path="/date" exact element={<ApodByDate />} />
        <Route path="/random" exact element={<RandomApod />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
