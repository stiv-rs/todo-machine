import './TodoItem.css';

function TodoItem(props) {
  const completeBtnClass = `TodoItem__complete-btn${props.completed ? ' TodoItem__complete-btn--completed' : ''}`;
  const textClass = `TodoItem__text${props.completed ? ' TodoItem__text--completed' : ''}`;

  return (
    <li className="TodoItem">
      <button className={completeBtnClass} aria-label="Completar tarea">
        ✓
      </button>
      <p className={textClass}>{props.text}</p>
      <button className="TodoItem__delete-btn" aria-label="Eliminar tarea">
        ✕
      </button>
    </li>
  );
}

export { TodoItem };