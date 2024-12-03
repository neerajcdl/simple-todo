import React from "react";
import { useNavigate } from "react-router-dom";
import "../dashboard/Dashboard.css";

const Dashboard = (props) => {
  const { todoData, setTodoData, setIsEditing, setCurrentIndex } = props;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const deleteData = todoData.filter((_, index) => id !== index);
    setTodoData(deleteData);
  };

  const handleEdit = (id) => {
    setCurrentIndex(id);
    setIsEditing(true);
    // setTodo(todoData[id]);
    navigate("/");
  };

  const handleDone = (id) => {
    const doneData = todoData.map((item, index) =>
      index === id ? { ...item, completed: !item.completed } : item
    );
    setTodoData(doneData);
  };

  return (
    <div>
      {todoData.map((item, index) => {
        return (
          <div key={index} className="dashboard-data-container">
            <div
              className="dashboard-data"
              style={{
                textDecoration: item.completed ? "line-through" : "",
              }}
            >
              <p>{item.name}</p>
              <p>{item.age}</p>
              <p>{item.gender}</p>
              <p>{item.venderId}</p>
            </div>
            <div className="dashboard-btn-container">
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDone(index)}>Done</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
