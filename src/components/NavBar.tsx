import React from 'react'
import { Stack, Image, Text, Box } from '@chakra-ui/react';
import logo from "../assets/logo.svg";
import coin from "../assets/coin.svg";
import { usePoints } from '../user/hooks';
import { useUser } from '../user/hooks';



export const NavBar: React.FC = () => {

    const [points, addPoints] = usePoints();
    const user = useUser();
    //utilizamos el hook q creamos
    return (
        <Box padding={6} backgroundColor='white' >
            <Stack direction="row" justifyContent="space-between" height={8} >
                <Stack>
                    <Image src={logo} width={9} height={9} />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={6}>
                    <Text fontWeight="600" fontSize="lg">{user.name}</Text>
                    <Stack direction="row"
                        backgroundColor="gray.200"
                        borderRadius="xl"
                        paddingX={3}
                        paddingY={1}
                        alignItems="center"
                        cursor="pointer"
                        onClick={() => addPoints(1000)}  >
                        <Text>{points}</Text>
                        <Image src={coin} width={6} height={6}></Image>
                    </Stack>
                </Stack>
            </Stack>
        </Box>

    )
}
