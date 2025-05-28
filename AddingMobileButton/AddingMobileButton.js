// Importo el botón desde react-bootstrap y los estilos personalizados
import Button from 'react-bootstrap/Button';
import './AddingMobileButton.scss';

// Componente para mostrar el botón de "Add Goal" en versión móvil
function AddingMobileButton() {
  return (
    <div className="adding-mobile-container">
      <Button variant="info" className="btn-addgoal">
        Add Goal
      </Button>
    </div>
  );
}

export default AddingMobileButton;
