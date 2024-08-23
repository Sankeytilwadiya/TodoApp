import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Todolist() {
  const [todos, settodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  const [newtodo, setnewtodo] = useState("");
  let addNewTask = () => {
    settodos([...todos, { task: newtodo, id: uuidv4() }]);
    setnewtodo("");
  };
  let updateskey = (event) => [setnewtodo(event.target.value)];

  let deletetodo = (id) => {
    settodos(todos.filter((todo) => todo.id != id));
  };

  let MarkasDoneAll = () => {
    settodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
         isDone:true,
        };
      })
    );
  };

  let MarkasDone = (id) => {
    settodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone:true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1> Todo list</h1>
      <input
        type="text"
        placeholder="add your text"
        value={newtodo}
        onChange={updateskey}
      />
      <button onClick={addNewTask}>add</button>
      <br />
      <br />
      <br />
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span  style={todo.isDone?{textDecorationLine:"line-through"}:{}} >{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deletetodo(todo.id)}>Delete</button>
            <button onClick={() => MarkasDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={MarkasDoneAll}>Mark as Done all</button>
    </div>
  );
}

export default Todolist;
