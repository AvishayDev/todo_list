import { useContext, useState } from "react";
import { todosContext } from "../TodosContext";
import { useLittleShow } from "../hooks/useLittleShow";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import globalStyles from './../css/Global.module.css'
import TextInput from "./TextInput";

function AddTaskBar() {
    const [taskText,setTaskText] = useState('');
    const {todos,setTodos} = useContext(todosContext);
    const [errorMessage,setErrorMessage] = useLittleShow('',3)

    const handleAddTask = (event) =>{
        console.log('add task to the list');

        if (!taskText){
            console.log('no text')
            setErrorMessage('Please Add Text to Your Task!')
            return
        }

        setTaskText('');
        setTodos([...todos,{text:taskText, checked:false,id:todos.length}]);

    }

    return (<>
            <div className={[globalStyles['row-order'],globalStyles['space-between']].join(' ')}>
                <TextInput 
                    value={taskText}
                    onChange={(event)=>setTaskText(event.target.value)}
                    placeholder="Write Your Task Here..!"/> 
                
                <div>
                    <ControlPointIcon fontSize="large" onClick={handleAddTask}/>
                </div>
            </div>
            
            <p className={globalStyles.error}>{errorMessage}</p> 
    </> );
}

export default AddTaskBar;