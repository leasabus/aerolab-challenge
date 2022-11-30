import { useEffect, useState } from "react"
import { Product } from "./types"
import { getProducts } from "./productApi";
import { CircularProgress, Flex } from "@chakra-ui/react";
import ProductList from "./components/ProductList";


export const HomeScreen = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [status, setStatus] = useState<"pending" | "resolve" | "rejected">("pending");
    // console.log(getProducts())

    useEffect(() => {
        //se trae el usuario de la api
        // api.list().then((products) => {
        //     setProducts(products);
        //     setStatus("resolve")

        // })

        getProducts().then((products) => {
            setProducts(products);
            setStatus("resolve")
        })

        //el pending deja de ser true y muestra la app

    }, [])

    if (status === "pending") {
        return <Flex justifyContent="center" alignItems="center" padding={12} >
            <CircularProgress isIndeterminate color='red.500' />
        </Flex>

    };


    return <div>
        <ProductList products={products} />

    </div>

}

