import AddTodos from "./components/AddTodos";
import TodosList from "./components/TodosList";

import './App.css';

function App() {
  return ( 
  <div className="App">
    <AddTodos />
    <TodosList />
  </div> );
}

export default App;