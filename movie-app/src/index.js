import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Data from './Components/data.js';

function App() {
  return (
    <div className="App"></div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Data />, rootElement);
