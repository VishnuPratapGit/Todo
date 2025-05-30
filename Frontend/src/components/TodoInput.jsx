import React from "react";
import { SquarePen } from "lucide-react";

const TodoInput = ({
  todoInput,
  setTodoInput,
  addTodo,
  update,
  addUpdatedTodo,
}) => {
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <form className="flex gap-2">
      <input
        onChange={handleChange}
        className="bg-neutral-800 outline-none border-2 focus:border-neutral-400 border-neutral-600 text-white rounded-md p-5 w-full h-12"
        type="text"
        value={todoInput}
        placeholder="Create Todo"
      />
      {update ? (
        <button
          type="submit"
          onClick={addUpdatedTodo}
          className="bg-emerald-500 text-xl hover:bg-emerald-400  text-white outline-none rounded px-10"
        >
          <SquarePen size={20} />
        </button>
      ) : (
        <button
          type="submit"
          onClick={addTodo}
          className="p-4 leading-1 bg-emerald-500 text-xl hover:bg-emerald-400  text-white outline-none rounded px-10"
        >
          +
        </button>
      )}
    </form>
  );
};

export default TodoInput;
