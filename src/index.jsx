import React from "react";
import ReactDOM from "react-dom";

import HomePage from './pages/homepage/homepage.component';

import "./styles.scss";


function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
