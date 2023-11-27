import { useContext, useEffect } from "react";
import Todo from "./Todo";
import { todosContext } from "../TodosContext";
import styles from './../css/TodoList.module.css'


function TodoList() {

    const {todos,setTodos,showTodos} = useContext(todosContext);


    const handleDeleteTask = (taskId) =>{
        
        // setTodos([...todos.slice(0,taskIndex) ,
        //           ...todos.slice(taskIndex + 1,todos.length)])
        setTodos(todos.filter((todo)=>todo.id !== taskId))
    }
    
    const handleTaskCheckChange = (taskId) =>{

        const newTodoIndex = todos.findIndex(({id})=>id===taskId);
        const newTodo = todos[newTodoIndex];
        newTodo.checked = !newTodo.checked;

        setTodos([...todos.slice(0,newTodoIndex),
                  newTodo,
                  ...todos.slice(newTodoIndex + 1,todos.length)])
}

    const handleTaskTextChange = (newText,taskId) => {
        const newTodoIndex = todos.findIndex(({id})=>id===taskId);
        const newTodo = todos[newTodoIndex];
        newTodo.text = newText;

        setTodos([...todos.slice(0,newTodoIndex),
                  newTodo,
                  ...todos.slice(newTodoIndex + 1,todos.length)])


    }

    //useEffect(()=>{ console.log(todos)},[todos])
    return ( <div className={styles['todo-list']}>
        {
            showTodos.length > 0 ?
                showTodos.map((todo)=>
                <Todo text={todo.text} 
                      checked={todo.checked}
                      key={todo.id}
                      onDelete={()=>handleDeleteTask(todo.id)}
                      onCheckChange={() => handleTaskCheckChange(todo.id)}
                      onTextChange={(newText) => handleTaskTextChange(newText,todo.id)}
                      />)
                :
                <p style={{fontWeight:'bold', paddingLeft:'10px'}}>Add Your Task Down There!</p>
        }
        </div> );
}

export default TodoList;