import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import { AuthProvider } from "./contexts/AuthContext";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <MyHeader text="CHECK OUT CONTEXT, MY STUDENTS" />
        <MyHeader>
          CHECK OUT <span style={{ color: "red" }}>CONTEXT</span> MY STUDENTS
        </MyHeader>
        <header className="App-header">
          <Login />
          <TodoList />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
