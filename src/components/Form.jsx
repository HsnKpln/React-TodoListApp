import React,{useState} from "react";

function Form({inputText,setInputText,todos,setTodos,status,setStatus}){

const [alertWarning, setAlertWarning] = useState(false);
const [alertSuccess, setAlertSuccess] = useState(false);
    const inputTextHandler= (e)=>{
      setInputText(e.target.value);
    }

    
    const submitHandler= (e)=>{
        e.preventDefault();
        const isEmpty= str=>!str.trim().length;
        if(isEmpty(inputText)){
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        }else{
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                {text: inputText, complated:false, id:Math.random()}
            ]);
        }
        
        setInputText("");
    }

    const statusHandler=(e)=>{
          setStatus(e.target.value);
    }
    
    
    
    return(
       <form>
           <div className="search">
           <input type="text" onChange={inputTextHandler} value={inputText}/>
           <button onClick={submitHandler} >Ekle</button>
           </div>
           <div className="select">
               <select name="todos" onChange={statusHandler}>
                   <option value="all">All</option>
                   <option value="complated">Complated</option>
                   <option value="uncomplated">Uncomplated</option>
               </select>
           </div>
           <div className="alert-wrapper">
               {alertWarning ? <div className="alert-warning">
                     <div>Bu alan boş geçilemez..</div>
                 </div> : ""}
                 {alertSuccess ? <div className="alert-success">
                     <div>Ekleme başarılı</div>
                 </div> : ""}
                 
                 
           </div>
       </form>
    );
}
export default Form