import { Text } from '@chakra-ui/react'
import React from 'react'


interface Props {
    current: number,
    total: number
}

//este componente va a mostrar los valores de current y total
//le paso las props al comp para usarlas en el product list
export const Count: React.FC<Props> = ({ current, total }) => {
    return (
        <Text fontWeight="bold" fontSize="xl" color="gray.600">
            {current} of {total} products
        </Text>
    )
}
