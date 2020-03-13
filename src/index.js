import React from "react";
import ReactDOM from "react-dom";

const todos = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
  { id: 3, title: "title3" },
  { id: 4, title: "title4" }
];

const deleteTargetID = 4;
const deleteAray = todos.filter(todo => todo.id !== deleteTargetID);

console.log(deleteAray);

const Todos = ({ todos }) => {
  const list = todos.map(todo => {
    return (
      <li>
        {todo.id} {todo.title}
      </li>
    );
  });
  return <ul>{list}</ul>;
};

ReactDOM.render(<Todos todos={todos} />, document.getElementById("root"));

// const el = document.getElementById("root");
// render(<Todos />, document.getElementById("root"));
// import App from "./App";
