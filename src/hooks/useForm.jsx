import { useState } from "react"


// useForm Hook
export function useForm(){
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ?
        setInputs(values => ({...values, [name]: checked })) :
        setInputs(values => ({ ...values, [name]: value }));
    }

    return [inputs,handleChange]

}