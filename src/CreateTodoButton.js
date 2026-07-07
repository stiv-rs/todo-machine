import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <div className="CreateTodoButton">
      <button className="CreateTodoButton__btn" aria-label="Crear nueva tarea">
        <span>+</span>
      </button>
    </div>
  );
}

export { CreateTodoButton };