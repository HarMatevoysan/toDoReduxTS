import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks";
import { useAction } from "./hooks/useAction";
import { todoTypes } from "./store/actionTypes";
import React, { FormEvent, useEffect, useState } from "react";

import "./app.css";

import { ToDoList } from "./components";

const App = () => {
  const state = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { fetchTodos } = useAction();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const AddTodos = () => {
    dispatch({ type: todoTypes.ADD_TODO, payload: text });
    setText("");
  };

  return (
    <div className="contenir">
      <div className="title">ToDo List </div>
      <form
        className="form"
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Text are here"
        />
        <button onClick={() => AddTodos()}>Add</button>
      </form>
      <div>
        {state.todos.length ? (
          <div>
            <ToDoList />
          </div>
        ) : (
          <div className="todo-text">No ToDos</div>
        )}
      </div>
    </div>
  );
};

export default App;
