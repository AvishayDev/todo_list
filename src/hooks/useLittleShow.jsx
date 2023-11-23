import { useEffect, useState } from "react"


// useForm Hook
export function useLittleShow(initialState, lengthInSecounds){

    const [message,setMessage] = useState(initialState);

    useEffect(()=>{
        setTimeout(()=>setMessage(initialState),lengthInSecounds * 1000)
    },[message])

    return [message,setMessage]
}