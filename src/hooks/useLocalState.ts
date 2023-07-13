import { Dispatch, SetStateAction, useEffect, useState } from "react";

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalState<T>(key:string,defaultValue:T): [T,SetValue<T>]{
    const [value,setValue] = useState<T>(defaultValue)
    
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}