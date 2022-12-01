import React from 'react'
import { Image, Stack, Heading, Flex, Container } from '@chakra-ui/react';
import header from "../assets/header-x1.png";

export const ImageHome: React.FC = () => {
    return (

        <Container maxWidth={"container.xl"} >
            <Flex backgroundImage={header}
                width="full"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                justifyContent="flex-start"

                alignItems="flex-end"
                minHeight={54}
                height={[28, '250px', '385px']}>
                <Heading color="gray.700" padding={6} fontSize="4xl" display={['none', 'flex']}>Electronics</Heading>
            </Flex>

        </Container>

    )
}
