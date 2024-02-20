import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// JSX (Transpiled before it reaches the JS) - Parcel - Babel

const jsxHeading = <h1>Nmaste React By JSX 🚀</h1>; //Conver this into browser understand language that is Ecmascript pure Javascript

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//ReactDom will conver react element into HTML

root.render(jsxHeading);
