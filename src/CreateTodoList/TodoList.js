function TodoList(props){
    return(
            <label class="checkbox" for="apple">  {props.children}</label>
    );
  }

  export { TodoList };