import React from "react";

function useLocalStorage(itemName, initialValue){

    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=> {
       setTimeout(() => {
        try{
            const localStorageTodos = localStorage.getItem(itemName);
            let parsedTodos ;
            if(!localStorageTodos){
                localStorage.setItem(itemName, JSON.stringify([initialValue]));
                parsedTodos = initialValue;
              }else{
                parsedTodos = JSON.parse(localStorageTodos)
                setItems(parsedTodos);
              }
    
              setLoading(false);

            }
            catch(error){
                setLoading(false)
                setError(true)

            }
       }, 2000);

    },[]);

   
    
  
    const saveItems=(newItem ) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
    };
  
    return {items,saveItems, loading, error};
  
  }

  export {useLocalStorage};