function TodoItem(props){
    return(
      <div class="checkbox-container">
            <input  
              type="checkbox" 
              id="myCheckbox" 
              checked={props.completed}
              onClick={props.onComplete}
              
            />
            <label class="checkbox" for="apple">  {props.text}</label>
            <span 
              className="Icon Icon-delete"
              onClick={props.onDelete}
              > X</span>
        </div>
    );
  }

  export {TodoItem};