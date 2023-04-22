import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { todoTypes } from "../../store/actionTypes";

import "./ToDoItem.css";

interface ToDoItemProps {
  todo: [];
  id: number;
  text: string;
  completed: boolean;
}

const ToDoItems = ({ todo, id, text, completed }: ToDoItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text);

  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch({ type: todoTypes.REMOVE_TODO, payload: id });
  };

  const doneTodo = () => {
    dispatch({ type: todoTypes.COMPLETE_TODO, payload: todo });
  };

  const saveTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: todoTypes.UPDATE_TODO, payload: [id, editText] });
    setIsEdit(false);
  };

  return (
    <div className={completed ? "todo__item done" : "todo__item"}>
      {isEdit ? (
        <form onSubmit={saveTodo} className="edit__form">
          <input
            type="text"
            value={editText}
            className="edit__text"
            onChange={(e) => setEditText(e.target.value)}
          />
          <button>Save</button>
        </form>
      ) : (
        <div>
          {text}
          <button onClick={removeTodo}>Remove</button>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </div>
      )}
      <button className="done__bnt" onClick={doneTodo}>
        {completed ? "Completed" : "Done"}
      </button>
    </div>
  );
};

export default ToDoItems;
