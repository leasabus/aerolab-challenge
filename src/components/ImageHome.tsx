import React from 'react'
import { Image, Stack, Heading, Flex, Container } from '@chakra-ui/react';
import header from "../assets/header-x1.png";

export const ImageHome: React.FC = () => {
    return (

        <Stack>
            <Flex backgroundImage={header}
                width="full"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                justifyContent="flex-start"
                alignItems="flex-end"
                minHeight={64}>
                <Heading color="gray.700" padding={4} fontSize="4xl">Electronics</Heading>
            </Flex>

        </Stack>

    )
}
