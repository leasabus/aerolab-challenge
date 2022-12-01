import { Product } from "./types";
import axios from "axios";

export default {
    //metodo para comprar los products
    redeem: (product: Product): Promise<string> => Promise.resolve(`You have succefully product (${product.name})`),
}

//fetch with axios

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdiODk5MjZmYTMwMTAwMjE0YjQyMTkiLCJpYXQiOjE2NjkwNDA1MzB9.j2UV4RQNJYJ5JYO3VxDYsDilI33aNYotZv8S6f3c2NE';
const baseUrl = 'https://coding-challenge-api.aerolab.co/';
const header = {
    Authorization: `Bearer ${token}`,
};

export const getProducts = async () => {
    try {
        const products = await axios({
            method: 'GET',
            url: baseUrl + 'products',
            headers: header,

        });
        return products.data;
    } catch (error) {
        throw new Error("fetching error");
    }
};



