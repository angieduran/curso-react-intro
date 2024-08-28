import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
      <div>
        <h1>
          PASOS PARA UNA CONTRATACION
        </h1>
        <h2>Has completado {completed} de {total} TODOS</h2>
        <div className="divImg">
         <img src="https://integriapps.com/wp-content/uploads/2020/11/Contratando-candidato.png" alt='angi' ></img>
        </div>
      </div>
    );
  }

  export { TodoCounter };