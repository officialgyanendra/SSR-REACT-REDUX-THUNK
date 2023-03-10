import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import ListingScreen from "./containers/ListingScreen";
import DetailsScreen from "./containers/DetailsScreen";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListingScreen />} />
        <Route path="/details/:id" element={<DetailsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
