import React, { useState } from "react";
import Form from "./components/Form";
import Lists from "./components/Lists";

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

function App() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState(initialTodoData);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      done: false,
    };

    setTodoData([...todoData, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    setValue("");
  };

  const handleClear = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-purple-100">
      <div className="w-full lg:max-w-lg lg:max-w-3/4 p-6 m-4 bg-white rounded shadow">
        <div className="flex justify-between pb-2">
          <h1>
            📌 {month}월 {day}일 오늘의 할 일
          </h1>
          <button onClick={handleClear}>🧹 전체 삭제</button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
