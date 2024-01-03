import React from "react";
import PropTypes from 'prop-types' 

var person = {
    name:"Martha",
    age:27
}
//const FirstApp = (props) // sin destructuring
const FirstApp = ({greeting ='Hola no se envió ningun props', subtitle}) =>{//contenido por defecto si la propiedad llega vacía
    return (
        // una forma más práctica de usar fragments es poniendo las etiquetas <> & </>
        <> 
        <h1>Hola Mundo</h1>
        {/* Imprimiendo saludo desde las propiedades recibidas */}
        {/* <h1> {props.greeting} </h1> */}{/*sin destructuring*/}
        <h1>{greeting}</h1>{/*con destructuring*/}
        <h2>{subtitle}</h2>
        <pre>{JSON.stringify(person)}</pre>
        <p>My first example in java-script after long time</p>
        </>
    )
}
//Para mostrar un mensaje de error cuando el tipo de propiedad de nuestra variable greeting no sea 
//del tipo especificado
FirstApp.propTypes ={
    //Para obligar a que la propiedad sea enviada al componente "isRequired"
    greeting: PropTypes.string.isRequired//, 
    //si no ponemos isRequired es opcional enviarla o no
    //otherProperty:PropTypes.number 
}
//Para tratar de la misma forma propiedades por defecto
FirstApp.defaultProps = {
    subtitle: 'Soy un subtítulo'
}

export default FirstApp;