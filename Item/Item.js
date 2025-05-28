import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Item.scss";
import { useDispatch } from 'react-redux';
import { removeTodo, addTodo } from '../../reducers/todoSlice';

function Item(props) {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.name));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir lógica para edición si decides implementarla después
    console.log(`Editando: ${props.name}`);
  };

  return (
    <Card className="mb-3 item-card">
      <Card.Body>
        <Card.Title className="text-primary fw-bold">{props.name}</Card.Title>

        <Card.Text className="fw-bold">Description</Card.Text>
        <Card.Text>
          {props.description || 'Elaborar una aplicación web responsive en la que se pueda llevar el control de mis tareas y metas personales.'}
        </Card.Text>

        <Card.Text className="fw-bold">Due Date</Card.Text>
        <Card.Text>
          {props.dueDate || '31/05/2024'}
        </Card.Text>
      </Card.Body>

      <Card.Body className="d-flex gap-2 justify-content-end">
        <Button variant="info" onClick={handleEdit}>Editar</Button>
        <Button variant="info" onClick={handleRemove}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
