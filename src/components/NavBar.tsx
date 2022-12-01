import React from 'react'
import { Stack, Image, Text, Box, Button } from '@chakra-ui/react';
import logo from "../assets/logo.svg";
import coin from "../assets/coin.svg";
import { usePoints } from '../user/hooks';
import { useUser } from '../user/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
                    <Button
                        backgroundColor="gray.300"
                        fontSize="xl"
                        paddingX={3}
                        paddingY={1}
                        borderRadius="xl"
                        onClick={() => addPoints(1000)}

                    >
                        +</Button>
                    <Stack direction="row"
                        backgroundColor="gray.300"
                        borderRadius="xl"
                        paddingX={3}
                        paddingY={1}
                        alignItems="center"
                        cursor="pointer"
                        onClick={() => addPoints(1000)}  >
                        <Text fontWeight="semi-bold" fontSize="xl">{points}</Text>
                        <Image src={coin} width={6} height={6}></Image>
                    </Stack>
                </Stack>
            </Stack>
        </Box>

    )
}
