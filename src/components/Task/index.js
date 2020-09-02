import React from "react";

function Task(props) {
  return (
    <li style={props.isCompleted ? { color: "green" } : { color: "black" }}>
      {props.name}
    </li>
  );
}

export default Task;
