import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
//now we are goint to conver this react element to react component

const reactElement = (
  <>
    <h1 className="heading" tabIndex="1">
      Namaste React By JSX 🚀
    </h1>
    <p>Paragraph</p>
  </>
);

const ReactComponent = () => (
  <>
    <h1 className="heading" tabIndex="1">
      Namaste React By JSX 🚀
    </h1>
    <p>Paragraph</p>
  </>
);
 //this is how that looks like

const Header2Component = () => (
  <h1 className="heading" tabIndex="1">
    Namaste React By JSX Component🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//to render react component we want to wrap the component inside < />

root.render(<Header2Component />);