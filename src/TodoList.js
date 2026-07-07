import './TodoList.css';

function TodoList(props) {
  return (
    <div className="TodoList">
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export { TodoList };