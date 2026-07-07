import './TodoSearch.css';

function TodoSearch() {
  return (
    <div className="TodoSearch">
      <input
        className="TodoSearch__input"
        type="text"
        placeholder="Buscar tarea..."
      />
    </div>
  );
}

export { TodoSearch };