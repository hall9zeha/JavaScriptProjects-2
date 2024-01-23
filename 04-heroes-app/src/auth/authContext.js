import { createContext } from "react";

//Como la devolución de createContext() es un componente, el nombre de la constante 
//tendrá la sintaxis de un Componente(con mayúsculas por convención), esto es opcional claro
export const AuthContext = createContext()