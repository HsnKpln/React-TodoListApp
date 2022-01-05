import React from 'react'


function Todo({text,todo,todos,setTodos}) {
    const deleteHandler=()=>{
            setTodos(todos.filter((el)=>el.id !== todo.id))
    }
    const complatedHandler= ()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item, complated: !item.complated
                }
            }
            return item;
        }))
    }
    return (
        <div className={`todo ${todo.complated ? "complated" : ""}`}>
            <button onClick={complatedHandler}>Tik</button>
            <li>{text}</li>
            <button onClick={deleteHandler}>eksi</button>
        </div>
    )
}

export default Todo
