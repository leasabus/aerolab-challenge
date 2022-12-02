
import { Product } from '../types';
import { Button, Grid as ChakraGrid, Stack } from '@chakra-ui/react';
import { ProductCard } from './ProductCard';
import { useState } from 'react';


interface Props {
    products: Product[];
}

export const Grid: React.FC<Props> = ({ products }) => {
    //creamos un estado para seleccionar un producto de la grilla
    const [selected, setSelected] = useState<Product['_id'] | null>(null)
    //el elemento seleccionado puede ser un id o null
    //paginacion
    //el primer estado setea el numero de pagina
    const [page, setPage] = useState(1);
    //el segundo setea la cantidad de productos q se muestran
    const [numberPage, setNumberPage] = useState(16);

    const handleChangePage = () => {
        return setPage(2)
    }

    const handleReturnPage = () => {
        return setPage(1)
    }
    return (
        <>
            <ChakraGrid className='animate__animated animate__fadeIn' gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%" >
                {
                    products.slice(
                        (page - 1) * numberPage,
                        (page - 1) * numberPage + numberPage
                    ).map((product) =>
                        <ProductCard
                            key={product._id}
                            product={product}
                            isSelected={selected === product._id}
                            onClick={() => setSelected(product._id)}
                        ></ProductCard>
                    )
                    //hacemos un map de los productos para q se muestren y renderizamos el
                    //componente product card pasandole el producto como prop
                }
            </ChakraGrid>
            <Stack direction="row" spacing={4} justifyContent="center" alignItems="center" paddingY={8}  >
                <Button borderRadius="xl" padding={4} fontSize="lg" backgroundColor="#3bf4fb" width="120px" onClick={handleReturnPage}>Back</Button>
                <Button borderRadius="xl" padding={4} fontSize="lg" backgroundColor="#3bf4fb" width="120px" onClick={handleChangePage}>Next Page</Button>
            </Stack>
        </>


    )
}
