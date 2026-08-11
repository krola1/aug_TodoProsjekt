import "./App.css";
import "./styles/global.css";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSort from "./components/TodoSort";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoFilter />
      <TodoSort />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
