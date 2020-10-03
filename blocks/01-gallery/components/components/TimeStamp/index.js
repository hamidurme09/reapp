import React from "react";

const TimeStamp = (props) => {
  const { handleAdd, handleDate, handleDelete, date, todos } = props;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ color: "green" }} onClick={handleDate()}>
          {" "}
          {date}{" "}
        </p>
        <button className="saveBtn" onClick={handleAdd}>
          STAMP
        </button>
      </div>

      <h1>Timestamp</h1>

      {todos.length > 0 ? (
        todos.map((todo, i) => (
          <div key={i} style={{ display: "flex" }}>
            <p className="todoList">{todo.time}</p>
            <button onClick={() => handleDelete(todo.id)} className="deleteBtn">
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1>Please add timestamp</h1>
      )}
    </div>
  );
};

export default TimeStamp;
