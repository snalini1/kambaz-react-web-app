import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/CounterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/AddReducer";
import todosReducer from "../Lab4/ReduxExamples/todos/TodosReducer";


const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer }
});
export default store;