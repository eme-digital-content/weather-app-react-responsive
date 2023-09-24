import React from "react";
import Weather from "./Weather";
import "./App.css";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather defaultCity="Porto Alegre" />
      </div>
    </div>
  );
}
