import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import AuthContext from "./contexts/AuthContext";

function App() {
  const [userId, setUserId] = useState(null); // move it to a dedicated component
  console.log("WHAT IS A CONTEXT?:", AuthContext);
  return (
    <AuthContext.Provider value={{ userId: userId, setUserId: setUserId }}>
      <div className="App">
        <header className="App-header">
          <Login />
          <TodoList />
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
