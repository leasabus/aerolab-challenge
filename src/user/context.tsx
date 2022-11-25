import { Center, CircularProgress } from '@chakra-ui/react';
import React from 'react';
import api from './api';
import { User } from './userTypes';

/* este provider es utilizado en los hooks para crear las acciones y renderizado en la navbar
 para actualizar el estado del usuario*/

// export const UserContext = createContext({});

//aca definimos las acciones y el estado q queremos desplegar en la app
export interface Context {
    state: {
        user: User;
    };
    actions: {
        addPoints: (amount: number) => Promise<void>
    };
}

//se inicializa como un contexto
const UserContext = React.createContext({} as Context);

const UserProvider = ({ children }: any) => {
    //tenemos q crear un estado para guardar los datos del usuario cuando los traigamos de la api
    const [user, setUser] = React.useState<User>()
    //creamos un segundo estado para ver en q estado esta la app, si trajimos los datos correctamente o no
    const [status, setStatus] = React.useState<"pending" | "resolve" | "rejected">("pending");
    //definimos los 3 tipos de datos que podemos utilizar mientras se obtiene la data


    //esta funcion recibe los datos de la api points y su funcion es agregarlos al user
    //el then establece q pasa cuando salga bien
    async function handleAddPoints(amount: number) {
        if (!user) return;
        //si no existe el user no retornamos anda
        return api.points.add(amount).then(() => {
            setUser({ ...user, points: user.points + amount })
        })
        //recupera los datos del user, los puntos van a ser los que ya tenia 
        //mas los que yo le pase en el amount
    }

    /*cuando este componente se monta, tiene q llamar a api.fetch para traer el usuario
    cuando lo hace devuelve un usuario y devuelve el estado de resolve
    */
    React.useEffect(() => {
        //se trae el usuario de la api
        api.fetch().then((user) => {
            setUser(user);
            setStatus("resolve")
            //el pending deja de ser true y muestra la app
        })
    }, [])


    //si no tengo un usuario o el estado es pending, se muestra un spinner
    if (!user || status === "pending") {
        return <Center padding={12} >
            <CircularProgress isIndeterminate color='blue.500' />
        </Center>

    };

    //le decimos q el estado es de context state(lo definimos arriba)
    const state: Context["state"] = {
        user,
    };
    const actions = {
        addPoints: handleAddPoints
    };


    //cuando tengamos todos los datos le pasamos el provider con el estado y las acciones
    return <UserContext.Provider value={{ state, actions }}>
        {children}
    </UserContext.Provider>
};

export { UserContext as default, UserProvider as Provider };

