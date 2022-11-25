
import { useContext } from "react";
import UserContext, { Context } from "./context";
//creamos un hook para utilizarlo en la app
//llamamos a los metodos, como el addpoints q definimos antes
//el context sirve para ordenar los parametros que estoy devolviendo
export const usePoints = (): [Context["state"]["user"]["points"], Context["actions"]["addPoints"]] => {
    const { state: { user }, actions: { addPoints } } = useContext(UserContext);
    return [user.points, addPoints]
}


//creamos el hook para utilizar el nombre de usuario
export const useUser = (): Context["state"]["user"] => {
    const { state: { user }, } = useContext(UserContext);
    return user;
}