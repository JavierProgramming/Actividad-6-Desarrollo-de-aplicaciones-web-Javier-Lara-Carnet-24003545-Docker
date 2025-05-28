import Button from 'react-bootstrap/Button';
import './List.scss';

const List = (props) => {
  return (
    <ul className="list-group">
      {props.items && props.items.map((item) => (
        <li 
          key={item.name} 
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            role={props.toggle ? "button" : undefined}
            tabIndex={props.toggle ? 0 : undefined}
            onClick={() => props.toggle && props.toggle(item.id)}
            onKeyPress={(e) => {
              if (props.toggle && (e.key === 'Enter' || e.key === ' ')) {
                props.toggle(item.id);
              }
            }}
            style={{
              textDecoration: item.complete ? "line-through" : "none",
              cursor: props.toggle ? "pointer" : "default",
              flexGrow: 1,
            }}
          >
            {item.name}
          </span>
          {props.remove && (
            <Button 
              variant="danger" 
              size="sm" 
              onClick={() => props.remove(item)}
              aria-label={`Remove ${item.name}`}
            >
              X
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
