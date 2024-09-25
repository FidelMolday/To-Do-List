import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todoValue, settodoValue] = useState("");

  const [todos, settodos] = useState([]);

  const handleDone = (e) => {
    const { id } = e.target.parentElement;
    todos[id].done = !todos[id].done;
    // console.log(todos[id].done, todos[id].value);
    settodos([...todos]);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (
      // todoValue === <strong>[&rlm;&rlm;&lrm;]</strong> ||
      // todoValue?.trim() == " ‏‏‎ " ||

      todoValue === undefined ||
      todoValue === "" ||
      todoValue?.trim() === ""
    ) {
      alert("You are lazy!!! enter proper value.");
    } else {
      const todo = {
        value: todoValue,
        done: false
      };
      // spreading of previous value of todos
      settodos([...todos, todo]);
      document.getElementById("todoValue").value = "";
      // console.log(todoValue);
      settodoValue("");
      // console.log(todoValue)
    }
  }

  function hanleDelete(e) {
    const { id } = e.target.parentElement;
    console.log(id);
    console.log(e.target.parentElement);
    todos.splice(id, 1);
    settodos([...todos]);
  }

  function changeHandler(event) {
    settodoValue(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>TO-DO App</h1>
      </div>

      <div>
        <form className="formtodo" onSubmit={handleSubmit}>
          <input
            placeholder="Enter Your Text Here..."
            type="text"
            id="todoValue"
            onChange={changeHandler}
          ></input>

          <button type="submit">Add Todo</button>
        </form>
      </div>

      <div>
        {todos &&
          todos.map((task, i) => {
            return (
              <div className="todo-list" key={task.value} id={i}>
                <button
                  // if task.done is true then apply "done"  to classname else apply "not-done".. task.done will be changed to true on click over it

                  className={task.done ? "done" : "not-done"}
                  onClick={handleDone}
                >
                  {task.value}
                </button>
                {/* {task.value} */}
                <button onClick={hanleDelete}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
