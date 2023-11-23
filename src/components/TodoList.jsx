import { useContext, useEffect } from "react";
import Todo from "./Todo";
import { todosContext } from "../TodosContext";
import styles from './../css/TodoList.module.css'


function TodoList() {

    const {todos,setTodos,showTodos} = useContext(todosContext);

    const handleDeleteTask = (taskIndex) =>{
        
        //console.log(todos[taskIndex]);

        setTodos([...todos.slice(0,taskIndex) ,
                  ...todos.slice(taskIndex + 1,todos.length)])
    }
    
    const handleTaskCheckChange = (taskIndex) =>{

        const newTodo = todos[taskIndex];
        newTodo.checked = !newTodo.checked;

        setTodos([...todos.slice(0,taskIndex),
                  newTodo,
                  ...todos.slice(taskIndex + 1,todos.length)])
}

    const handleTaskTextChange = (newText,taskIndex) => {
        const newTodo = todos[taskIndex];
        newTodo.text = newText;

        setTodos([...todos.slice(0,taskIndex),
                  newTodo,
                  ...todos.slice(taskIndex + 1,todos.length)])


    }

    //useEffect(()=>{ console.log(todos)},[todos])
    return ( <div className={styles['todo-list']}>
        {
            showTodos.length > 0 ?
                showTodos.map((todo,index)=>
                <Todo text={todo.text} 
                      checked={todo.checked}
                      key={index}
                      onDelete={()=>handleDeleteTask(index)}
                      onCheckChange={() => handleTaskCheckChange(index)}
                      onTextChange={(newText) => handleTaskTextChange(newText,index)}
                      />)
                :
                <p style={{fontWeight:'bold', paddingLeft:'10px'}}>Add Your Task Down There!</p>
        }
        </div> );
}

export default TodoList;