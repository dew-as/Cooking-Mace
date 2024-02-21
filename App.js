import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
const jsxHeading = (
  <>
    <h1 className="heading" tabIndex="1">
      Namaste React By JSX 🚀
    </h1>
    <p>Paragraph</p>
  </>
);

// React Component
// Class Based Component
// Functional Component

// React Functional Component

// This is how we create  REACT COIMPONENT USING return keyword
const HeaderComponent = () => {
  return (
    <h1 className="heading" tabIndex="1">
      Namaste React By JSX 🚀
    </h1>
  );
};

//this is how we create React component just wraping it into a () paranthisis not using return keyword

const Header2Component = () => (
  <h1 className="heading" tabIndex="1">
    Namaste React By JSX 🚀
  </h1>
);

//Both way to create react component is valid syntax
// React component is just a javascript function that return some Jsx or React element
// And the first letter of react component name is must be Capital letter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);