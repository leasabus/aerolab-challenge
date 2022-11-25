import { Divider, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Product } from '../types';
import { Count } from './Count';
import { Filter } from './enum';
import { Filters } from './Filters';
//las props son un array de product
interface Props {
    products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
    //el usestate va a ser de tipo filter(enum)
    const [filter, setFilter] = useState<Filter>(Filter.MostRecent)
    return (
        <Stack spacing={6} paddingY={6}>
            <Stack
                alignItems="center"
                justifyContent="center"
                direction="row"
                spacing={6}
                padding={4}
                width="100%"
                divider={<Divider borderColor="gray.300" height={12} orientation="vertical" />}>

                {/* este comp va a devolver la cantaidad de productos */}
                <Count current={products.length} total={products.length} />
                {/* este componente va a mostrar los filtros y que va a pasar caundo
                los filtros cambien */}

                <Filters active={filter} onChange={setFilter} />

            </Stack>
        </Stack>
    )
}

export default ProductList;
