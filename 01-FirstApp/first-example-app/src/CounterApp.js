import React ,{useState} from "react";//importamos el hook useState
import PropTypes from "prop-types"



const CounterApp = ({value = 25})=>{//valor por defecto si no recibimos nada desde la vista padre del index

    let [counter, setCounter] = useState(value);//la función de useState retorna un arreglo [elemento, function()]

    const handleOnClick = (e)=>{
        switch (e) {
            case 1:
                setCounter(counter + 1);
                break;
            case 2:
                setCounter(value);
                break;
            case 3:
                setCounter(counter -1);
                break;
            default:
                break;
        }
       
        // setCounter((c)=>c+1) // otra forma
        
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            {/* Al pasar la función como referencia solo se ejecutará al hacer click */}
            {/* <button value={1} onClick={()=>handleOnClick(1)}>+1</button>
            <button value={2} onClick={()=>handleOnClick(2)}>reset</button>
            <button value={3} onClick={()=>handleOnClick(3)}>-1</button> */}

            {/* o simplemente de la siguiente manera */}
            <button  onClick={()=>setCounter(counter +1)}>+1</button>
            <button  onClick={()=>setCounter(value)}>reset</button>
            <button  onClick={()=>setCounter(counter -1)}>-1</button>

            {/* Al pasar la función de la siguiente manera la ejecutará inmediatamente al crear el componente
            <button onClick={handleOnClick()}>+1</button> */}
        </>
    )
} 
CounterApp.propTypes={
    value: PropTypes.number.isRequired
}
export default CounterApp;