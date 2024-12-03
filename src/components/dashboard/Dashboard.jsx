import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../dashboard/Dashboard.css";

const Dashboard = (props) => {
  const { todoData, setTodoData, setIsEditing, setCurrentIndex } = props;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

  // search

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = () => {
    const query = searchQuery.toLowerCase().trim();
    return todoData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) |
        item.age.toLowerCase().includes(query) |
        item.gender.toLowerCase().includes(query) |
        item.venderId.toLowerCase().includes(query)
    );
  };

  return (
    <div className="dashboard-container">
      <div className="search-input-field">
        <input placeholder="search" onChange={handleSearch} />
      </div>
      {filterData().length === 0 ? (
        <div className="no-data-part">No Data</div>
      ) : (
        filterData().map((item, index) => {
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
        })
      )}
    </div>
  );
};

export default Dashboard;
