import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1>i am element to element</h1>;

const HeadComponent = () => (
  <div>
    <h1 className="heading" tabIndex="1">
      i am component to element
    </h1>
  </div>
);

const heading2 = (
  <div>
    <h2>i am element to component</h2>
    <HeadComponent />
    {heading1}
  </div>
);

const ReactComponent = () => (
  <div>
    <h1 className="heading" tabIndex="1">
      i am component to component
    </h1>
    {heading2}
  </div>
);

const HeaderComponent = () => (
  <div id="container">
    <ReactComponent />
    <h1 className="heading" tabIndex="1">
      Basically these all are javascript.... react element becomes js object ....
      jsx becomes react element and then js object....component is used to write JSX and
      we can write js by adding {"{ }"} in component we can write any javascript code 🚀
    </h1>
  </div>
);

// if we use a component inside another component like this known as Component Composition 🚀

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
