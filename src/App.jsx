import { useReducer, useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import TodoDispatchContext from "./context/TodoDispatchContext";
import todoReducer from "./reducers/todoReducers";

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider> 
  )
}

export default App
