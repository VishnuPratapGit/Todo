class TodoServices {
  constructor() {
    this.BASE_URL = import.meta.env.VITE_API_URL;
  }

  async saveTodo(todo) {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/todo/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return false;
      }

      return data;
    } catch (error) {
      console.log("Request not sent: ", error);
      alert("Request not sent");
      return false;
    }
  }

  async getTodos() {
    try {
      const response = await fetch(`${this.BASE_URL}/api/v1/todo/get-todos`, {
        method: "GET",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return false;
      }

      return data.todos;
    } catch (error) {
      console.log("Request not sent: ", error);
      alert("Request not sent");
      return false;
    }
  }

  async deleteTodo(id) {
    try {
      const response = await fetch(
        `${this.BASE_URL}/api/v1/todo/delete-todo/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return false;
      }

      return data.deletedTodo;
    } catch (error) {
      console.log("Request not sent: ", error);
      alert("Request not sent");
      return false;
    }
  }

  async updateTodo(id, todo) {
    try {
      const response = await fetch(
        `${this.BASE_URL}/api/v1/todo/update-todo/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todo }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return false;
      }

      return data.updatedTodo;
    } catch (error) {
      console.log("Request not sent: ", error);
      alert("Request not sent");
      return false;
    }
  }

  async updateCheckTodo(id, completed) {
    try {
      const response = await fetch(
        `${this.BASE_URL}/api/v1/todo/complete-todo/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return false;
      }

      return data.updatedTodo;
    } catch (error) {
      console.log("Request not sent: ", error);
      alert("Request not sent");
      return false;
    }
  }
}

const todoServices = new TodoServices();

export default todoServices;
