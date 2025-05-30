import React from "react";
import { Trash2, SquarePen } from "lucide-react";

const ListTodos = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="w-full mt-4 flex flex-col gap-2">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex gap-4 w-full p-4 rounded bg-neutral-700 border border-neutral-500"
        >
          <div className="w-full">{todo.todo}</div>
          <div className="flex gap-3">
            <div onClick={() => deleteTodo(todo._id)}>
              <Trash2 className="text-rose-500" />
            </div>
            <div onClick={() => updateTodo(todo._id, index)}>
              <SquarePen className="text-blue-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
