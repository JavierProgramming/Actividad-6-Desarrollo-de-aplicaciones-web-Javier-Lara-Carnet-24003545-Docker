import List from "./list";
import { useSelector, useDispatch } from 'react-redux';
import {
  addGoal,
  selectGoals
} from '../reducers/goalsSlice';
import { useRef } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import './Goals.scss';

export function Goals() {
  const dispatch = useDispatch();
  const goals = useSelector(selectGoals);
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value !== "") {
      dispatch(addGoal({ name: value }));
      inputRef.current.value = "";
    }
  };

  return (
    <Container className="goals-container">
      <h2 className="text-light mb-4">My Goals</h2>
      <Form className="d-flex mb-3" onSubmit={addItem}>
        <Form.Control
          type="text"
          placeholder="Add a goal"
          ref={inputRef}
          className="me-2"
        />
        <Button variant="info" type="submit">Add Goal</Button>
      </Form>
      <List items={goals} />
    </Container>
  );
}
