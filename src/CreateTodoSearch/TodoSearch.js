import './TodoSearch.css'
import React from 'react';
function TodoSearch({
  searchValue,
  setSearchValue
}){
  
    return(
      <div class="box">
       <form name="search">
        <input  
          type="text"
          class="inputSearch"
          name="txt"
          value={searchValue}
          onMouseOut="this.value = ''; this.blur();" 
          onChange={(event) =>{
            setSearchValue(event.target.value);
          }}
        
        />
       </form>
       <i class="fas fa-search"></i>
      </div>
    );
  }

  export { TodoSearch };