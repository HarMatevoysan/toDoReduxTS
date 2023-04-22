import { todoTypes } from "../store/actionTypes";

export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
}

interface fetchTodoAction {
  type: todoTypes.FETCH_TODO;
}

interface addTodo {
  type: todoTypes.ADD_TODO;
  payload: any[];
}

interface removeTodo {
  type: todoTypes.REMOVE_TODO;
  payload: number;
}

interface compliteTodo {
  type: todoTypes.COMPLETE_TODO;
  payload: any[];
}

interface errorTodo {
  type: todoTypes.FETCH_TODO_ERROR;
  payload: string;
}

interface fetchTodo {
  type: todoTypes.FETCH_TODO_SUCS;
  payload: any[];
}

interface clearCompletedTodo {
  type: todoTypes.CLEARE_COMPLETE_TODO;
  payload: any[];
}

interface updateTodo {
  type: todoTypes.UPDATE_TODO;
  payload: [number, string];
}

export type TodoAction =
  | fetchTodoAction
  | addTodo
  | removeTodo
  | compliteTodo
  | errorTodo
  | clearCompletedTodo
  | fetchTodo
  | updateTodo;
