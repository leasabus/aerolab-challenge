import { Product } from "./types";
import axios from "axios";

export default {
    // list: (): Promise<Product[]> =>
    //     new Promise(resolve => setTimeout(() => resolve([

    //         {
    //             "_id": "5a033eeb364bf301523e9b92",
    //             "name": "Sandalia Pale Gold YSL",
    //             "cost": 200,
    //             "category": "Indumentaria",
    //             "img": {
    //                 "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
    //                 "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
    //             }
    //         },
    //         {
    //             "_id": "5a033f0f364bf301523e9b93",
    //             "name": "iPhone 7 Case Sea-Blue",
    //             "cost": 200,
    //             "category": "Accesorios",
    //             "img": {
    //                 "url": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
    //                 "hdUrl": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    //             }
    //         }
    //     ]), 500)),
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



