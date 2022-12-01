import { Box, BoxProps, Stack, Grid as ChakraGrid, Text, Image, Center, Divider, Flex, Button } from '@chakra-ui/react';
import React from 'react'
import { Product } from '../types'
import coin from '../../assets/coin.svg'
import { usePoints, useRedeem } from '../../user/hooks';

//comopnente q muestra la grilla de products
interface Props extends BoxProps {
    product: Product;
    isSelected: boolean
}

//recibimos como props al prduct, isselected para hacer un onclick y todas las demas props
export const ProductCard: React.FC<Props> = ({ product, isSelected, ...props }) => {
    //usamos el custom hook q creamos antes para el manejo de los puntos
    const [points] = usePoints();
    const redeem = useRedeem();
    //si el costo de los productos es menor que los puntos q tenemos lo podemos comprar
    const canBuy = product.cost <= points;

    const handleRedeem = () => {
        if (canBuy) {
            return redeem(product)
        }

    }
    return (
        <>
            <Stack direction="row" justifyContent="center" alignItems="center" className='animate__animated animate__fadeIn'>

                <Box {...props}
                    _hover={{ transform: 'translateY(-5px)', boxShadow: '5px 10px 20px 0px #3bf4fb' }}
                    backgroundColor="gray.200"
                    position="relative"
                    padding={6}
                    borderRadius="xl"
                    boxShadow="2xl"
                    border="1px"
                    borderColor="gray.300"
                    //si lo puedo comprar muestra un cursor pointer, si no un notallowed
                    cursor={canBuy ? "pointer" : "not-allowed"}
                    //lo mismo con la opacidad
                    opacity={canBuy ? 1 : 0.5}
                >
                    <Stack spacing={3} >
                        <Stack alignItems="center"
                            backgroundColor={canBuy ? "gray.700" : "gray.200"}
                            borderRadius="9999"
                            borderWidth={1}
                            borderColor={canBuy ? "gray.500" : "gray.500"}
                            color={canBuy ? "white" : "black"}
                            direction="row"
                            fontSize="sm"
                            fontWeight="500"
                            justifyContent="center"
                            paddingX={3}
                            paddingY={1}
                            position="absolute"
                            right={6}
                            spacing={2}
                            top={6}
                        >
                            <Text>{canBuy ? product.cost : `Missing ${product.cost - points} points`}</Text>
                            <Image src={coin} width={4} height={4}></Image>
                        </Stack>
                        <Center>
                            <Image objectFit="contain" src={product.img.url}></Image>
                        </Center>
                        <Divider />
                        <Stack alignItems="flex-start" spacing={0}>
                            <Text textColor="gray.500">{product.category}</Text>
                            <Text fontWeight="500">{product.name}</Text>
                        </Stack>

                    </Stack>
                    {/* si el elemento esta selecionado */}
                    {isSelected &&
                        <Flex
                            alignItems="center"
                            borderRadius="sm"
                            height="100%"
                            justifyContent="center"
                            left={0}
                            position="absolute"
                            top={0}
                            zIndex={2}
                            width="100%"

                        >
                            <Box
                                //si lo puedo comprar muestra un bg, si no otro
                                backgroundColor={canBuy ? "blue.400" : "gray.700"}
                                borderRadius="sm"
                                height="100%"
                                width="100%"
                                left={0}
                                top={0}
                                position="absolute"
                                opacity={0.8}


                            >
                            </Box>
                            <Stack color="white"
                                fontSize="2xl"
                                fontWeight="bold"
                                spacing={6}
                                zIndex={3}>
                                <Stack justifyContent="center" alignItems="center">
                                    <Text color="green.300">{points}</Text>
                                    <Text color="red.500"
                                        borderBottomColor="white"
                                        borderBottomWidth={2}
                                    >
                                        -{product.cost}</Text>
                                    <Text>{points - product.cost}</Text>

                                </Stack>
                                {
                                    //solo se va a mostrar si lo puedo comprar
                                    canBuy && (
                                        <Button color="blue.300"
                                            onClick={handleRedeem}>
                                            Buy Now
                                        </Button>
                                    )

                                }
                            </Stack>


                        </Flex>
                    }

                </Box>

            </Stack>

        </>
    )
}
