import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import styles from './../css/Todo.module.css'
import globalStyles from './../css/Global.module.css'
import TextInput from "./TextInput";

function Todo(props) {

    const [isEditable,setIsEditable] = useState(false);
    const [taskText,setTaskText] = useState(props.text);

    return (
            <div className={[globalStyles['row-order'],globalStyles['space-between'], styles['todo-style']].join(' ')}>
                <div className={[globalStyles['row-order']].join(' ')} style={{marginLeft:'5px'}}>
                    <input 
                        type="checkbox"
                        checked={props.checked}
                        onChange={props.onCheckChange}/>
                    
                    {isEditable ? 
                        <TextInput
                            style={{height:'5px'}}
                            value={taskText}
                            onChange={(event)=>setTaskText(event.target.value)}/>
                            :
                            <p className={props.checked ? styles.overline : ''}>
                                {props.text}
                            </p>
                        }
                </div>

                <div className={globalStyles['row-order']} style={{margin:'5px'}}>
                    <DeleteIcon onClick={props.onDelete}/>
                    <div onClick={()=>{ isEditable && (() => {
                                                        props.onTextChange(taskText);
                                                        setTaskText(taskText);
                                                    })()
                                            setIsEditable(!isEditable);}}>
                            {isEditable ? <CheckIcon/> : <EditIcon/>}
                    </div>
                </div>
            </div>
         );
}

export default Todo;