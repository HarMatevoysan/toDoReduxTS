import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
