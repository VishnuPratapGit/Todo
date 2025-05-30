import Todo from "../models/todo.model.js";

async function saveTodo(req, res) {
  try {
    const { todo } = req.body;

    const newTodo = new Todo({ todo });
    const savedTodo = await newTodo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: error.message });
  }
}

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    return res.status(200).json({ success: true, todos });
  } catch (error) {
    console.error("Todos fething failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to delete, todo not found!" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Deletion successful", deletedTodo });
  } catch (error) {
    console.error("Deletion failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { todo } = req.body;

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing 'todo' field",
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { $set: { todo } },
      { new: true }
    );

    if (!updatedTodo) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to update!" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Update successful", updatedTodo });
  } catch (error) {
    console.error("Updation failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export { saveTodo, getAllTodos, deleteTodo, updateTodo };
