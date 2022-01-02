import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

const [inputText ,setInputText] = useState("");
const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>MY TODO LİST</h1>
      </header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      SetTodos= {setTodos}
      />
      <TodoList 
      todos={todos}
      setTodos= {setTodos}
      />
    </div>
  );
}

export default App;
