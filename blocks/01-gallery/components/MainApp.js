import React, { useState, useEffect } from "react";
import moment from "moment";
import Count from "./components/Count";
import db from "./firebase";
import TimeStamp from "./components/TimeStamp";

const MainApp = () => {
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, time: doc.data().time }))
        );
      });
  }, []);

  const handleDate = () => {
    setInterval(() => {
      setDate(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
  };

  const handleAdd = () => {
    console.log("hello");
    db.collection("todos").add({
      time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
  };

  const handleDelete = (id) => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <div>
      <h1>ReactHelloWorld from react frontent</h1>

      <Count />
      <TimeStamp
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        handleDate={handleDate}
        todos={todos}
        date={date}
      />
    </div>
  );
};

export default MainApp;
