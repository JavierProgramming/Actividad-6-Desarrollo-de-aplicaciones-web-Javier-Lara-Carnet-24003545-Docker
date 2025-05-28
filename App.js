import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Components/Menu/Menu';
import FormTaskAndGoal from './Components/Formulario/Formulario';
import Item from './Components/Item/Item';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initAddTodo } from './reducers/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);

  // Nuevas tareas iniciales
  const initialTodos = [
    { name: 'Leer 30 minutos' },
    { name: 'Hacer ejercicio en casa' }
  ];

  useEffect(() => {
    if (todos.length === 0) {
      initialTodos.forEach((item) => {
        dispatch(initAddTodo(item));
      });
    }
  }, [dispatch, todos.length, initialTodos]);

  return (
    <div className="App">
      <Menu />

      {/* 
        Comentado el import y uso de <Todos/> y <Goals/> 
        si los quieres activar solo descomenta aquí y en imports
      */}

      <Container>
        <Row>
          {/* Mostrar formulario solo en pantallas md en adelante */}
          <Col md={4} className="d-none d-md-block">
            <FormTaskAndGoal />
          </Col>

          {/* En dispositivos pequeños mostrar lista y botón */}
          <Col xs={12} md={8}>
            <Row className="d-md-none mb-3">
              <div className="bg-transparent overlapping-div">
                <AddingMobileButton className="float-left" />
              </div>
            </Row>
            <Row>
              <div className="scrolling w-100">
                {todos.map((todo, index) => (
                  <Item key={index} name={todo.name} />
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
