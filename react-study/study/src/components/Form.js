import React from "react";

const Form = ({ handleSubmit, value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <form className="flex justify-between pt-2" onSubmit={handleSubmit}>
        <input
          className="w-full p-2 mr-4 border-2 rounded shadow"
          type="text"
          placeholder="오늘은 무슨 일을 할까요?"
          value={value}
          onChange={handleChange}
        />
        <input
          className="p-2 border-2 rounded bg-purple-200 text-white hover:bg-purple-300"
          type="submit"
          value="입력"
        />
      </form>
    </div>
  );
};

export default Form;
