import React from 'react'


function Todo({text}) {
    return (
        <div className='todo'>
            <button>Tik</button>
            <li>{text}</li>
            <button>eksi</button>
        </div>
    )
}

export default Todo
