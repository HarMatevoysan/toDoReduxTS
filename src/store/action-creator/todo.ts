import axios from "axios";
import { Dispatch } from "react";
import { todoTypes } from "../actionTypes";
import { TodoAction } from "../../types/todo";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: todoTypes.FETCH_TODO });
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      dispatch({ type: todoTypes.FETCH_TODO_SUCS, payload: respone.data });
    } catch (e) {
      dispatch({ type: todoTypes.FETCH_TODO_ERROR, payload: "error" });
    }
  };
};
