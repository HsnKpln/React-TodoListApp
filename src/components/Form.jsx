import React, { useState } from "react";

function Form({ inputText, setInputText, todos, setTodos, status, setStatus }) {

    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, complated: false, id: Math.random() }
            ]);
        }

        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }



    return (
        <form>
            <div className="container mt-5 mb-4">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card shadow">
                            <div className="card-header bg-dark text-light"> Add Todo </div>
                            <div className="card-body">
                                <form>
                                    <div class="input-group mb-3 search">
                                        <input type="text" className="form-control" onChange={inputTextHandler} value={inputText} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <button onClick={submitHandler} type="button" className="btn btn-info">Ekle</button>
                                    </div>
                                    <div className="select col-12">
                                        <select name="todos" className="form-control" onChange={statusHandler}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>


    );
}
export default Form