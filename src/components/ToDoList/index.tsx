import React, { FC } from "react";
import { ToDoItem } from "./../index";
import { useDispatch } from "react-redux";
import { todoTypes } from "../../store/actionTypes";
import { useTypedSelector } from "../../hooks";

import "./ToDoList.css";

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const state = useTypedSelector((state) => state.todo);
  const completedSize = state.todos.filter((t) => t.completed).length;

  const clearCompetedTodosBtn = () => {
    dispatch({ type: todoTypes.CLEARE_COMPLETE_TODO, payload: state.todos });
  };

  const todosItem = state.todos.map((todo) => (
    <ToDoItem
      todo={todo}
      id={todo.id}
      key={todo.id}
      text={todo.title}
      completed={todo.completed}
    />
  ));

  return (
    <div>
      {todosItem}
      <div className="done__btn">
        <div>
          {completedSize}/{state.todos.length} Completed
        </div>
        <button
          disabled={completedSize ? false : true}
          onClick={clearCompetedTodosBtn}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
