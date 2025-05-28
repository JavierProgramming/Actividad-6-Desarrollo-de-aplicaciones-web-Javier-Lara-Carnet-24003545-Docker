import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formulario.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addTodo } from '../../reducers/todoSlice';

function Formulario() {
  const dispatch = useDispatch();
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();

    const newTodo = {
      name: inputRefName.current.value,
      description: inputRefDescription.current.value,
      dueDate: inputRefDueDate.current.value,
    };

    dispatch(addTodo(newTodo));

    // Limpio los campos después de agregar
    inputRefName.current.value = '';
    inputRefDescription.current.value = '';
    inputRefDueDate.current.value = '';
  };

  return (
    <div className="form-container">
      <Form onSubmit={addItem}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter goal name" ref={inputRefName} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe your goal" ref={inputRefDescription} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" ref={inputRefDueDate} />
        </Form.Group>

        <Button variant="info" type="submit">
          Add Goal
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
