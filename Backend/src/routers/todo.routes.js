import express from "express";
import {
  saveTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
  changeChecked,
} from "../controllers/todo.controller.js";

const todoRoutes = express.Router();

todoRoutes.route("/save").post(saveTodo);
todoRoutes.route("/get-todos").get(getAllTodos);
todoRoutes.route("/delete-todo/:id").delete(deleteTodo);
todoRoutes.route("/update-todo/:id").patch(updateTodo);
todoRoutes.route("/complete-todo/:id").patch(changeChecked);

export default todoRoutes;
