import React, { useState, useCallback } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

export default function App() {
  const [todoData, setTodoDate] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleRemoveClick = () => {
    setTodoDate([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoDate(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //새로운 할 일 더해주기

    setTodoDate((prev) => [...prev, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow-sm lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1> 할 일 목록</h1>
          <button onClick={handleRemoveClick}> Delete all </button>
        </div>
        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoDate={setTodoDate}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
