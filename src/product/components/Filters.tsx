import { Box, Button, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Filter } from './enum'

interface Props {
    active: Filter;
    onChange: (filter: Filter) => void;
    //recibe el filtro q quedo activo
}
//esta func filters va a devolver un array de todos los filtros q creamos en el enum
const FILTERS: Filter[] = [Filter.MostRecent, Filter.LowerPrice, Filter.HighestPrice]
export const Filters: React.FC<Props> = ({ onChange, active }) => {
    return (
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
            <Text fontSize="xl" color="gray.500">Sort by:</Text>
            <Stack direction="row" >
                {FILTERS.map((filter) => (
                    <Button fontSize="xl" color="gray.500" borderRadius="xl" key={filter}>
                        {filter}
                    </Button>
                )
                )}

            </Stack>
        </Stack>
    )
}
