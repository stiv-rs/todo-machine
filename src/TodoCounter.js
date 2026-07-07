import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <div className="TodoCounter">
      <h1>
        Has completado <span>{completed}</span> de <span>{total}</span> tareas
      </h1>
    </div>
  );
}

export { TodoCounter };