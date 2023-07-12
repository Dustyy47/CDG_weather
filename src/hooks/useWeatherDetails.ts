import { useCallback, useEffect, useState } from "react"

const LS_SELECTED_WEATHER_DETAILS = 'selectedWeatherDetails'

export function useWeatherDetails(initialPickedFields:string[]) {
    const [selectedFields, setSelectedFields] = useState<string[]>([])
  
    useEffect(() => {
        const savedValue = localStorage.getItem(LS_SELECTED_WEATHER_DETAILS)
        if(savedValue)
            setSelectedFields(JSON.parse(savedValue))
        else
            setSelectedFields(initialPickedFields)
    }, [])

    const onChangeFields = useCallback((values:string[])=>{
        localStorage.setItem(LS_SELECTED_WEATHER_DETAILS,JSON.stringify(values))
        setSelectedFields([...values])
    },[])
  
    return { selectedFields, onChangeFields }
  }
  