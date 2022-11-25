import { createContext, useEffect, useState } from "react"
import { Product } from "./types"
import api from "./api";
import { Center, CircularProgress, Flex } from "@chakra-ui/react";
import ProductList from "./components/ProductList";

// export interface Context {
//     state: {
//         product: Product;
//     };
//     actions: {

//     };
// }

// const ProductContext = createContext({} as Context);

export const HomeScreen = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [status, setStatus] = useState<"pending" | "resolve" | "rejected">("pending");


    useEffect(() => {
        //se trae el usuario de la api
        api.list().then((products) => {
            setProducts(products);
            setStatus("resolve")
            //el pending deja de ser true y muestra la app
        })
    }, [])

    if (status === "pending") {
        return <Flex justifyContent="center" alignItems="center" padding={12} >
            <CircularProgress isIndeterminate color='red.500' />
        </Flex>

    };

    // const state: Context["state"] = {
    //     product,
    // };
    // const actions = {

    // };


    // return <ProductContext.Provider value={{ state, actions }}>
    //     {children}
    // </ProductContext.Provider>

    return <div>
        <ProductList products={products} />

    </div>

}

// export { ProductContext as default, ProductProvider as Provider };
