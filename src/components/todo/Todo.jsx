import React, { useEffect, useState } from "react";
import "../todo/Todo.css";

const Todo = ({
  todoData,
  setTodoData,
  isEditing,
  setIsEditing,
  currentIndex,
  setCurrentIndex,
}) => {
  const [todo, setTodo] = useState({
    age: "",
    gender: "",
    name: "",
    venderId: "",
    completed: false,
  });

  useEffect(() => {
    if (isEditing && currentIndex !== null) {
      setTodo(todoData[currentIndex]);
    }
  }, [isEditing, currentIndex, todoData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const editData = todoData.map((item, index) =>
        index === currentIndex ? todo : item
      );
      setTodoData(editData);
      setCurrentIndex(null);
      setIsEditing(false);
    } else {
      if (
        todo.name === "" ||
        todo.age === "" ||
        todo.gender === "" ||
        todo.venderId === ""
      ) {
        alert("please fill all required field");
      } else {
        setTodoData([...todoData, todo]);
      }
    }

    setTodo({
      age: "",
      gender: "",
      name: "",
      venderId: "",
    });
  };

  return (
    <div className="flex-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="name"
            value={todo.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="number"
            name="age"
            value={todo.age}
            placeholder="Enter your age"
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="gender"
            value={todo.gender}
            placeholder="Enter your gender"
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="number"
            name="venderId"
            value={todo.venderId}
            placeholder="Enter your VenderId"
            onChange={handleChange}
            className="input-field"
          />
          <button className="submit-button">Submit</button>
        </form>
      </div>
      <div className="list-container">
        {todoData.map((item, index) => (
          <div key={index}>
            <div className="flex-container">
              <p className={item.completed ? "strikethrough" : ""}>
                <strong>{index + 1}.</strong> {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
