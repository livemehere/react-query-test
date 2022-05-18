import "./App.css";
import { Todos } from "./components/Todos";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>React Query를 공부해보자</h1>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
