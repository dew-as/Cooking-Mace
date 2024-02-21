import React from "react";
import ReactDOM from "react-dom/client";

const FooterComponent = () => (
  <div id="footer">
    <h1 className="heading" tabIndex="1">
      Namaste Javascript Footer
    </h1>
  </div>
);

const HeaderComponent = () => (
  <div id="header">
    <FooterComponent /> {/* This is the way to call the react component */}

    <FooterComponent></FooterComponent> {/* this is another way to call this have another use case */}

    {FooterComponent()} {/* at the end react component means functinal component is a normal javascript function , and inside that the jsx will be converted into javascript by "babel" so we have now a function with an react element that is a javascript object ,it means a function assigned with the value is a object so we can also call the function in jsx how we call we need { } right */}

    {/* these all are same in result */}

    <h1 className="heading" tabIndex="1">
      Namaste Javascript Header
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
