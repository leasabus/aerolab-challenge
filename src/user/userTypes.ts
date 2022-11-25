import { Product } from "../product/types";
//tipo de typescript q va a tener un user
export interface User {
    "id": string,
    "name": string,
    "points": number,
    "redeemHistory": Product[],

}