import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Estudiar react', completed: true},
  { text: 'Superar el bloque 3 de react', completed: false},
  { text: 'Aprender mas de react', completed: false},
]

function App() {
  return (
   <>
   <TodoCounter total={3} completed={2} />
   <TodoSearch />
   
   <TodoList>
    {defaultTodos.map(todo =>(
      <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
      />
    ))}
   </TodoList>
   
   <CreateTodoButton />
  </>

  );
}

export default App;
