import React from "react";
import "./css/App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import ItemDetails from "./components/ItemDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/details" element={<ItemDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
