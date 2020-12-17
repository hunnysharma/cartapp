import React from "react";
import Service from "./Display";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./index.css";
import Header from "./Headers";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
    </>
  );
}

export default App;
