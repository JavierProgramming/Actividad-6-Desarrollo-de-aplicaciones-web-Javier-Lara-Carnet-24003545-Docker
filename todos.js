import List from "./list";
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  selectTodos
} from '../reducers/todoSlice';
import { useRef } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import './Todos.scss';

export function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value !== "") {
      dispatch(addTodo({ name: value }));
      inputRef.current.value = "";
    }
  };

  return (
    <Container className="todos-container">
      <h2 className="text-light mb-4">Todo List</h2>
      <Form className="d-flex mb-3" onSubmit={addItem}>
        <Form.Control
          type="text"
          placeholder="Add Todo"
          ref={inputRef}
          className="me-2"
        />
        <Button variant="info" type="submit">Add Todo</Button>
      </Form>
      <List items={todos} />
    </Container>
  );
}
