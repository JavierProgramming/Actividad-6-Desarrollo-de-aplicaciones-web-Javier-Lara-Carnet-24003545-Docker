import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Menu.scss";

function Menu() {
  return (
    <Navbar expand="lg" className="menu-navbar">
      <Container>
        <Navbar.Brand href="#home" className="menu-brand">My ToDo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#tasks" className="menu-link">Tasks</Nav.Link>
            <Nav.Link href="#goals" className="menu-link">Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
