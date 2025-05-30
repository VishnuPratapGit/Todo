import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import todoServices from "../services/todoService";
import "./App.css";
import ListTodos from "./components/ListTodos";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    todoServices.getTodos().then((todosData) => {
      if (todosData) setTodos(todosData);
    });
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;

    const saveTodo = await todoServices.saveTodo(todoInput);

    if (saveTodo) {
      const data = await todoServices.getTodos();
      setTodos(data);
    }

    setTodoInput("");
  };

  const deleteTodo = async (id) => {
    const deletedData = await todoServices.deleteTodo(id);

    if (deletedData) {
      todoServices.getTodos().then((todosData) => {
        if (todosData) setTodos(todosData);
      });
    }
  };

  const updateTodo = (id, index) => {
    setTodoInput(todos[index].todo);
    setUpdate(true);
    setUpdateId(id);
  };

  const addUpdatedTodo = async (e) => {
    e.preventDefault();

    const updatedData = await todoServices.updateTodo(updateId, todoInput);

    if (updatedData) {
      todoServices.getTodos().then((todosData) => {
        if (todosData) {
          setTodos(todosData);
          setTodoInput("");
        }
      });
    }

    setUpdate(false);
  };

  const changeCompleted = async (e, id) => {
    const value = e.target.checked;

    setUpdateId(id);
    const updatedData = await todoServices.updateCheckTodo(id, value);

    if (updatedData) {
      todoServices.getTodos().then((todosData) => {
        if (todosData) {
          setTodos(todosData);
        }
      });
    }
  };

  return (
    <div className="w-full h-screen pt-10">
      <div className="mx-auto w-1/2 border-2 bg-slate-100 border-neutral-600 rounded-lg p-4">
        <TodoInput
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          addTodo={addTodo}
          update={update}
          addUpdatedTodo={addUpdatedTodo}
        />

        <ListTodos
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          changeCompleted={changeCompleted}
        />
      </div>
    </div>
  );
}

export default App;
