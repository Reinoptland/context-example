import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import AuthContext from "./contexts/AuthContext";

function App() {
  // fucking callback props!! :(
  const [userId, setUserId] = useState(null); // move it to a dedicated component
  console.log("WHAT IS A CONTEXT?:", AuthContext);
  // Harcoding a userId that we are going to provide to the app
  return (
    <AuthContext.Provider value={{ userId: userId }}>
      <div className="App">
        <header className="App-header">
          <Login setUserId={setUserId} />
          <TodoList />
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
