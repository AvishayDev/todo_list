import { useContext } from "react";
import { todosContext } from "../TodosContext";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import globalStyles from './../css/Global.module.css'

function Header(props){

    const {todos} = useContext(todosContext);

    return ( <div className={[globalStyles['row-order'] , globalStyles['space-between']].join(' ')}>
        <div>
            <h1> Todo List</h1>
            <p>left tasks to do: {todos.filter((todo)=>!todo.checked).length}</p>    
        </div>
        <WbSunnyIcon onClick={props.toDarkMode}/>
        
    </div> );
}

export default Header;