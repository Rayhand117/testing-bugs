import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/todos";

const UserPage = () => {
  const [todos, setTodos] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => async () => {
    const getTodos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <p>Todo Page</p>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>id</th>
            <th>title</th>
            <th>isCompleted?</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr key={todo?.id} >
              <td> {todo?.id} </td>
              <td> {todo?.title} </td>
              <td> {todo?.completed.toString()} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Button onClick={() => navigate("/")} variant="primary">
        Home Page
      </Button> */}
    </div>
  );
};

export default UserPage;
