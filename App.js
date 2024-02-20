import React from "react"
import ReactDOM from "react-dom/client"


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "React H1"),
    React.createElement("h2", {}, "React H2"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
