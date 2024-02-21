import React from "react";
import ReactDOM from "react-dom/client";

//this is an api call for attack us, so if the code is exicuted that will be affect our safety
const malisiousData = api.getData("malisious data")

const HeaderComponent = () => (
  <div id="container">
    {malisiousData} { /* dont be afraid JSX will take care of it , JSX is not executing tha data directly , JSX  will be automatically sanitize the data before execution,so no one can attack us */ }
    <h1 className="heading" tabIndex="1">
      Namaste Javascript
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
