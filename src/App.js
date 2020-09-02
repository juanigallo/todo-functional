import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  // ['hola', 'chau']
  //[
  //   {
  //     value: 'hola',
  //     completed: false,
  //   }, {
  //     value: 'chau',
  //     completed: false
  //   }
  // ]

  function handleInputValue(value) {
    setTasks([
      ...tasks,
      {
        value,
        isCompleted: false
      }
    ]);
  }

  return (
    <>
      <AddTask handleCallback={handleInputValue} />
      <Tasks tasks={tasks} />
      Tareas resultas:
      <ul>
        <li>ACA VAN</li>
      </ul>
    </>
  );
}

export default App;
