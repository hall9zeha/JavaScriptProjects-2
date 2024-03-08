import React, { useState } from 'react'

export const useForm = (initialstate={}) => {
    const [values, setValues] = useState(initialstate);

    const reset = (newFormState = initialstate) =>{
        setValues(newFormState)
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name]:target.value
        })
    }
    return [values,handleInputChange,reset];    
}


