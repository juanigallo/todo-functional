import React from "react";
import Task from "../Task";

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((task, key) => {
        return (
          <Task name={task.value} isCompleted={task.isCompleted} key={key} />
        );
      })}
    </ul>
  );
}

export default Tasks;
