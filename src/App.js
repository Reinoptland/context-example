import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
