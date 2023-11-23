import React, { useState } from 'react';

import { createContext } from "react";


export const todosContext = createContext();

export function TodosProvider(props) {

    const [todos, setTodos] = useState([]);
    const [showTodos, setShowTodos] = useState(todos);

    const setNewTodos = (newTodos) =>{

        console.log(newTodos)
        const todosLength = todos.length
        setTodos(newTodos)
        
        if (showTodos.length === todosLength){
        setShowTodos(newTodos)
        console.log('show changed')
        }
    }


    const context = {
        'todos':todos,
        'setTodos':setNewTodos,
        'showTodos':showTodos,
        'setShowTodos':(newTodos)=>{setShowTodos(newTodos);
                                    console.log(newTodos.map(({text})=>text))}
    }

    return ( 
        <todosContext.Provider value={context}>
            {props.children}
        </todosContext.Provider>
     );
}

