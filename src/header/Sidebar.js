//import useState hook to create menu collapse state
import React, { useState } from 'react';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';

function Sidebar() {
  let [toDoList, setTodoList] = useState([]);
  let [todo, setTodos] = useState();

  const handler = (newTodo) => {
    setTodos(newTodo);
    console.log(newTodo);
    console.log(todo);
  };

  const addToDo = () => {
    if (toDoList.length && todo) {
      setTodoList([...toDoList, todo]);
    } else {
      setTodoList([todo]);
    }
    console.log(toDoList);
  };

  return (
    <div className="d-flex align-items-center h-100 justify-content-center">
      <div>
        <Form className="d-flex mb-3">
          <Form.Control
            type="text"
            value={todo}
            onChange={(e) => handler(e.target.value)}
            placeholder="Add Task..."
          />
          <Button onClick={addToDo}>Add</Button>
        </Form>
        <ListGroup>
          {toDoList.map(ele => {
            console.log(ele);
            <ListGroup.Item>ele</ListGroup.Item>;
          })}
        </ListGroup>
      </div>
    </div>
  );
}

export default Sidebar;
