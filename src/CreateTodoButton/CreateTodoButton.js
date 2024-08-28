import React from "react";

function CreateTodoButton({openModal, setOpenModal}){
  

    return(
      <button
        className="CreateTodoButton"
        onClick={
          (event) => {
            event.preventDefault();
            setOpenModal(!openModal);
            console.log("AQUIII")
          }
        }
      >

         Click </button>
    );
  }

  export {CreateTodoButton};