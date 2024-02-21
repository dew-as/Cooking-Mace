import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const ReactComponent = () => (
  <>
    <h1 className="heading" tabIndex="1">
      Namaste React Nested Component 🚀
    </h1>
    <p>Paragraph</p>
  </>
);

const Header2Component = () => (
  <div id="container">
    <ReactComponent />
    {/* this is how we can pass a component and use it inside */}
    <h1 className="heading" tabIndex="1">
      Namaste React Component 🚀
    </h1>
  </div>
);

// if we use a component inside another component like this known as Component Composition 🚀

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header2Component />);
