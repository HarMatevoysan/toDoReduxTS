import { TodoAction, TodoState } from "../types/todo";
import { todoTypes } from "./actionTypes";

const defaultState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = defaultState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case todoTypes.FETCH_TODO:
      return { ...state, loading: true };

    case todoTypes.FETCH_TODO_SUCS:
      return { ...state, loading: false, todos: action.payload };

    case todoTypes.ADD_TODO:
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      return { ...state, loading: false, todos: [...state.todos, newTodo] };

    case todoTypes.REMOVE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case todoTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) =>
          t === action.payload
            ? { ...action.payload, completed: !t.completed }
            : t
        ),
      };

    case todoTypes.CLEARE_COMPLETE_TODO:
      return { ...state, todos: state.todos.filter((t) => !t.completed) };

    case todoTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload[0]
            ? { ...action.payload, title: action.payload[1] }
            : t
        ),
      };

    default:
      return state;
  }
};
