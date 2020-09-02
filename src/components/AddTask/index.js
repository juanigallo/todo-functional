import React, { useState } from "react";

function AddTask(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.keyCode == 13) {
      addTask();
    }
  }

  function addTask() {
    if (inputValue && props.handleCallback) {
      props.handleCallback(inputValue);
      setInputValue("");
    }
  }

  return (
    <>
      <input
        onKeyDown={handleKeyPress}
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <button onClick={addTask}>Agregar</button>
    </>
  );
}

export default AddTask;
