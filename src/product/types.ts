//tipos de datos de los productos
export interface Product {
    "_id": string,
    "name": string,
    "cost": number,
    "category": string,
    "img": {
        "url": string,
        "hdUrl": string,

    }
}

