import { Divider, Stack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Product } from '../types';
import { Count } from './Count';
import { Filter } from './enum';
import { Filters } from './Filters';
import { Grid } from './Grid';
//las props son un array de product
interface Props {
    products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
    //el usestate va a ser de tipo filter(enum)
    const [filter, setFilter] = useState<Filter>(Filter.MostRecent)
    //implementacion de los filtros con useMemo
    //con use memo solo se va a ejecutar cuando las dependencias cambien
    const filterProducts = useMemo(() => {
        switch (filter) {
            case Filter.HighestPrice: {
                return [...products].sort((a, b) => b.cost - a.cost);
                //hacemos un spread porq sort modifica el array original
                //a y b indican q cambian los primeros 2 products y desp los siguientes
                //con b.cost aparecen los mas caros arriba 
            }

            case Filter.LowerPrice: {
                return [...products].sort((a, b) => a.cost - b.cost);
                //lo mismo pero invertimos los cost
            }

            //si no es ninguno de los dos retorna los productos como los tengo
            case Filter.MostRecent:
            default: {
                return products;
            }
        }
    }, [filter, products])
    //se ejecuta cuando cambia el filtro seleccionado o los productos


    return (
        <Stack spacing={6} paddingY={6}>
            <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                spacing={6}
                padding={4}
                width="100%"
                divider={<Divider borderColor="gray.400" height={12} orientation="vertical" />}>

                {/* este comp va a devolver la cantaidad de productos */}
                <Count current={products.length} total={products.length} />
                {/* este componente va a mostrar los filtros y que va a pasar caundo
                los filtros cambien */}

                <Filters active={filter} onChange={setFilter} />


            </Stack>
            <Stack >
                {/* el comp grid va a recibir los products filtrados como prop */}

                <Grid products={filterProducts} />

                {/* <Count current={products.length} total={products.length} /> */}
            </Stack>
        </Stack>
    )
}

export default ProductList;
