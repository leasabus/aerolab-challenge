import { Box, Stack, Text } from '@chakra-ui/react';
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
        //primer valor en pantalla chica, segundo grande
        <Stack direction={["column", "row"]} justifyContent={["center", "flex-start"]} alignItems="center" >
            <Text fontSize={["lg", "xl", "2xl"]} color="gray.500">Sort by:</Text>
            <Stack direction={["column", "row"]} spacing={4} >
                {FILTERS.map((filter) => (
                    <Box
                        className='animate__animated animate__fadeIn'
                        key={filter}
                        //si hacemos click en algun filtro(is active) mostramos el bg color de blue,
                        //de lo contrario se mantiene en gray100
                        backgroundColor={filter === active ? "#3bf4fb" : "gray.200"}
                        color={filter === active ? "black" : "gray.600"}
                        //cuando clickeamos cambiamos la fuente a white y el bg a gray.600
                        borderRadius={9999}
                        cursor="pointer"
                        onClick={() => onChange(filter)}
                        padding={2}
                        fontWeight="semibold"
                        fontSize={["md", "md", "xl"]}



                    >

                        {filter}
                    </Box>
                )
                )}

            </Stack>
        </Stack>
    )
}
