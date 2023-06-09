import React, { useState } from "react";

const Lists = ({ todoData, setTodoData }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  // 할 일 체크하기
  const handleDoneChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.done = !data.done;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  // ❌ 버튼 눌러 할 일 삭제하기
  const handleDelete = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };

  // 할 일 수정한 거 반영하기
  const handleEditChange = (event) => {
    setEditedTitle(event.target.value);
  };

  // 수정한 할 일 찾기
  const handleEditToggle = (id) => {
    setEditingId(id);
    const todo = todoData.find((data) => data.id === id);
    if (todo) {
      setEditedTitle(todo.title);
    }
  };

  // 수정한 할 일 제출하기
  const handleSubmit = (event, id) => {
    event.preventDefault();
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          title: editedTitle,
        };
      }
      return data;
    });
    setTodoData(newTodoData);
    setEditingId(null);
    setEditedTitle("");
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
              {editingId === data.id ? (
                <form onSubmit={(event) => handleSubmit(event, data.id)}>
                  <input
                    className="w-full px-3 p-2 mr-4 text-gray-500 rounded"
                    onChange={handleEditChange}
                    value={editedTitle}
                  />
                </form>
              ) : (
                <>
                  <input
                    className="mr-2"
                    type="checkbox"
                    defaultChecked={data.done}
                    onChange={() => handleDoneChange(data.id)}
                  />
                  <span className={data.done ? "line-through" : null}>
                    {data.title}
                  </span>
                </>
              )}
            </div>
            <div>
              {editingId === data.id ? (
                <button
                  className="p-2 mr-2"
                  onClick={(event) => handleSubmit(event, data.id)}
                  type="submit"
                >
                  💾
                </button>
              ) : (
                <button
                  className="p-2 mr-2"
                  onClick={() => handleEditToggle(data.id)}
                >
                  💬
                </button>
              )}
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
