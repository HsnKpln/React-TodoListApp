import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {

const [inputText ,setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("all");
const [filteredTodos, setFilteredTodos] = useState([]);

useEffect(() => {
  getLocalTodos();
}, [])

useEffect(() => {
  filterHandler(todos)
   saveLocalTodos();
 },[todos,status]) //eslient-disable-line

const filterHandler=()=>{
  switch (status) {
      case "complated":
          setFilteredTodos(todos.filter((todo)=>
              todo.complated===true))
          break;
      case "uncomplated":
          setFilteredTodos(todos.filter((todo)=>
              todo.complated===false))
          break;
  
      default:
        setFilteredTodos(todos)
          break;
  }
}

const saveLocalTodos = ()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
}

const getLocalTodos = ()=>{
  if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos",JSON.stringify([]))
  }else{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }
}




  return (
    <div className="App">
      <header>
        <h1>MY TODO LİST</h1>
      </header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos= {setTodos}
      status={status}
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos}
      setTodos= {setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
