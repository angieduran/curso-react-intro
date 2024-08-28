import React from "react";
import './TodoLoading.css';

function TodosLoading(){
    return(
        <div class="loader">
        <span class="loader-text">Cargando</span>
          <span class="load"></span>
      </div>
    
    )
}

export {TodosLoading}
