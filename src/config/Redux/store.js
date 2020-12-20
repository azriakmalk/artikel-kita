import { applyMiddleware, createStore } from "redux";
import  {Reducer} from "./reducer";
import thunk from "redux-thunk";

export const Store = createStore(Reducer, applyMiddleware(thunk));

// Store.subscribe(() => {
//   console.log("Subscribe : ", Store.getState());
// });
