import styles from './../css/TextInput.module.css'


function TextInput(props) {
    
    return ( 
    <div className={styles["input-container"]}>
        <input 
            style={props.style}
            type="text" 
            className={styles["input-field"]} 
            id="text-input" 
            placeholder=""
            onChange={props.onChange}
            value={props.value}/>
        <label for="text-input" className={styles["input-label"]}>{props.placeholder}</label>
  </div>
   );
}

export default TextInput;