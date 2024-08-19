const heading = React.createElement(
  "div",
  { id: "anish" },
  React.createElement("div", { id: "krutarth" }, [
    React.createElement("h1", {}, "Hello in React from Scratch"),
    React.createElement("h2", {}, "Hello through  CDN"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
