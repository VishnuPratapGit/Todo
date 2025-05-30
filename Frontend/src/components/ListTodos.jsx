import { Trash2, SquarePen } from "lucide-react";

const ListTodos = ({ todos, updateTodo, deleteTodo, changeCompleted }) => {
  return (
    <div className="w-full mt-4 flex flex-col gap-2">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex items-center gap-4 w-full p-4 rounded text-neutral-800 border border-neutral-500"
        >
          <input
            onChange={(e) => changeCompleted(e, todo._id)}
            className="h-6 w-6"
            type="checkbox"
            name="complete"
            checked={todo.completed}
          />

          <div
            className={`w-full ${
              todo.completed ? "line-through opacity-50" : ""
            }`}
          >
            {todo.todo}
          </div>

          <div className="flex gap-3">
            <div onClick={() => deleteTodo(todo._id)}>
              <Trash2 className="text-rose-500" />
            </div>
            <div onClick={() => updateTodo(todo._id, index)}>
              <SquarePen className="text-blue-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
