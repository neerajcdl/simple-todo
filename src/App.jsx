import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

const getlocalStorageItems = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [todoData, setTodoData] = useState(getlocalStorageItems());
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Todo
              currentIndex={currentIndex}
              isEditing={isEditing}
              todoData={todoData}
              setCurrentIndex={setCurrentIndex}
              setIsEditing={setIsEditing}
              setTodoData={setTodoData}
            />
          }
        />
        <Route
          path="/dashboard"
          exact
          element={
            <Dashboard
              todoData={todoData}
              setCurrentIndex={setCurrentIndex}
              setIsEditing={setIsEditing}
              setTodoData={setTodoData}
            />
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
