// import logo from './platzi.webp';
import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../CreateTodoSearch/TodoSearch';
import { TodoList } from '../CreateTodoList/TodoList';
import { TodoItem } from '../CreateTodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
import { TodosLoading } from '../TodosLoaging/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { Modal } from '../Modal/Modal';
// localStorage.removeItem('TODOS_V1')
// const defaultTodos= [
//   {text: 'Enviar hoja de vida', completed:true},
//   {text: 'Hacer entrevista con talento humano', completed:true},
//   {text: 'Hacer prueba tecnica', completed:true},
//   {text: 'Llenar entrevista tecnica', completed:true},
//   {text: 'Llenar documentaciòn de contrataciòn', completed:true},
//   {text: 'Tomar foto para el carnet', completed:false},
//   {text: 'Firmar el contrato', completed:false},
//   {text: 'Recibir el equipo de computo', completed:false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos))

function App() {
  const {items: todos, saveItems: saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)
  const searchedTodos = todos.filter(x=>x.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  console.log('Los usuarios buscan todos de ' + searchValue)

  const addTodo=(text) => {
    const newTodos= [...todos] /* para copiar todos los arrays previos*/
    newTodos.push({
      text,
      completed:false
    });
    saveTodos(newTodos);
  };
 
  const completeTodo= (text) => {
    const newTodos= [...todos] /* para copiar todos los arrays previos*/
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const DeleteTodo= (text) => {
    const newTodos= [...todos] /* para copiar todos los arrays previos*/
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text == text
    )
  
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };


  const completedTodos = todos.filter(x=> x.completed).length;
  const totalTodos = todos.length;
  return (
    <React.Fragment>
      <div className="app"  >
        <div className="login" >
          <div className="container" >
            <TodoCounter completed={completedTodos} total={totalTodos} /> 
            <TodoSearch 
            searchValue = {searchValue}
            setSearchValue ={setSearchValue}
            /> 
            <form>
              <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.lengt==0) && <EmptyTodos/>}
                
                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() =>completeTodo(todo.text)}
                    onDelete={() =>DeleteTodo(todo.text)}
                    />))}
              </TodoList>
              
              <CreateTodoButton
                openModal = {openModal}
                setOpenModal ={setOpenModal}
              />
              {
                openModal && (
                  <Modal setOpenModal ={setOpenModal}
                  AddTodo = {addTodo}
                  ></Modal>
                )
              }
            </form>
         </div>
       </div>
      </div>
     

     
    </React.Fragment>
  );
}



export default App;
