import React from "react";
import ReactDom from 'react-dom'
import './Modal.css'

function Modal({setOpenModal, AddTodo}){

    const onSubmit = (event) => {
        event.preventDefault();
        AddTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
       SetNewTodoValue(event.target.value);
    }


    const [newTodoValue, SetNewTodoValue] = React.useState('');

    return ReactDom.createPortal(
      <div className="ModalBackground"> 
        <div class="cookies-card">
            <p class="cookie-heading">Agregar item a la lista</p>
            <input 
                type="text"
                 id="email" 
                 className="email" 
                 placeholder="Escribe un nuevo item" 
                 required=""
                 value={newTodoValue}
                 onChange={onChange}
                 ></input>
            <div class="button-wrapper">
                <button 
                    class="accept cookie-button"
                    onClick={onSubmit }
                >Aceptar</button>
                <button 
                    class="reject cookie-button"
                    onClick={onCancel }
                >Cancelar</button>
            </div>
            <button class="exit-button">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 162 162"
                class="svgIconCross"
                >
                <path
                    stroke-linecap="round"
                    stroke-width="17"
                    stroke="black"
                    d="M9.01074 8.98926L153.021 153"
                ></path>
                <path
                    stroke-linecap="round"
                    stroke-width="17"
                    stroke="black"
                    d="M9.01074 153L153.021 8.98926"
                ></path>
                </svg>
            </button>
        </div>
      </div>  ,
      document.getElementById('modal')
    );
}

export {Modal};