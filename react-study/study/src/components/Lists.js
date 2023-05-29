import React from "react";

const Lists = ({ todoData, setTodoData }) => {
  const handleDone = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.done = !data.done;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleDelete = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData &&
        todoData.map((data) => (
          <div
            className="flex py-2 my-2 justify-between items-center border rounded bg-purple-50"
            key={data.id}
          >
            <div className="p-2 mx-2">
              <input
                className="mr-2"
                type="checkbox"
                defaultChecked={data.done}
                onChange={() => handleDone(data.id)}
              />
              <span className={data.done ? "line-through" : null}>
                {data.title}
              </span>
            </div>
            <div>
              <button className="p-2 mr-2">💬</button>
              <button
                className="p-2 mr-2"
                onClick={() => handleDelete(data.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Lists;
