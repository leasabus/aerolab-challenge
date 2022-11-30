
import { Product } from '../types';
import { Grid as ChakraGrid, Stack } from '@chakra-ui/react';
import { ProductCard } from './ProductCard';
import { useState } from 'react';

interface Props {
    products: Product[];
}

export const Grid: React.FC<Props> = ({ products }) => {
    //creamos un estado para seleccionar un producto de la grilla
    const [selected, setSelected] = useState<Product['_id'] | null>(null)
    //el elemento seleccionado puede ser un id o null
    return (
        <ChakraGrid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%" >
            {
                products.map((product) =>
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


    )
}
