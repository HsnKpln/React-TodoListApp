import React from "react";

function Form({inputText,setInputText,todos,SetTodos}){

    const inputTextHandler= (e)=>{
      setInputText(e.target.value);
    }
    
    const submitHandler= (e)=>{
        e.preventDefault();
        console.log(todos,inputText,"******");
        SetTodos([
            ...todos,
            {text: inputText, complated:false, id:Math.random()}
        ]);
        setInputText("");
    }
    
    return(
       <form>
           <div className="search">
           <input type="text" onChange={inputTextHandler} value={inputText}/>
           <button onClick={submitHandler} >Ekle</button>
           </div>
           <div className="select">
               <select name="todos" >
                   <option value="all">All</option>
                   <option value="complated">Complated</option>
                   <option value="uncomplated">Uncomplated</option>
               </select>
           </div>
       </form>
    );
}
export default Form