import { useState } from "react"


export const useForm = (initValues = {}) => {
    const[values, setValues] = useState(initValues);

    const resetForm = ()=>{
        setValues(initValues);
    }
    const handleOnChange =({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        })
    }

    return [values, handleOnChange, resetForm]
}
