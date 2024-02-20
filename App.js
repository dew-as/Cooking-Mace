import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElementJS-Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// JSX (Transpiled before it reaches the JS) - Parcel - Babel

// JSX => React.createElement => ReactElementJS-Object => HTMLElement(render)

const jsxHeading = (
  <>
    <h1 className="heading" tabIndex="1">
      Namaste React By JSX 🚀
    </h1>
    <p>Paragraph</p>
  </>
); //Conver this into browser understand language that is Ecmascript pure Javascript

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//ReactDom will conver react element into HTML

root.render(jsxHeading);
