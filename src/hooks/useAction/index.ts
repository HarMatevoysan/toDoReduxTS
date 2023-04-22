import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActionCreator from "./../../store/action-creator/todo";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TodoActionCreator, dispatch);
};
