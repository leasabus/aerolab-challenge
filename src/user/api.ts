import { User } from './userTypes';

//como seria un fetching con ts
export default {
    fetch: (): Promise<User> =>
        new Promise((resolve) =>
            setTimeout(() =>
                resolve({
                    "id": "5a03638052fd231590d04eb5",
                    "name": "John Kite",
                    "points": 2000,
                    "redeemHistory": [],

                }),
                500,
            ),
        ),
    //metodo para agregar los puntos al usuario
    points: {
        add: (amount: number): Promise<number> => Promise.resolve(amount)
    }


}