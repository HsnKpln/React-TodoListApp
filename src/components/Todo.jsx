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
            {/* <button onClick={complatedHandler} className="btn btn-success">Yapıldı</button> */}
            <i className='icon-tick' onClick={complatedHandler}></i>
            <li>
            <input type="text" value={text} className='border-0' />
            </li>
            <i className='icon-delete' onClick={deleteHandler}></i>
            {/* <button  className="btn btn-dark">Sil</button> */}
        </div>
    )
}

export default Todo
