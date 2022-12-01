import React from 'react'
import { Text, Stack, Button, Box, Container } from '@chakra-ui/react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs'


export const Footer = () => {
    return (
        <Container maxWidth="container.xl">
            <Stack backgroundColor="#3bf4fb">
                <Stack direction={["column", "row"]} justifyContent="center" alignItems="center" padding={4} >
                    <Text fontWeight="semibold" fontSize={["xl", "2xl"]}>Developed by Leandro Sabus.</Text>
                    <Text fontWeight="semibold" fontSize={["xl", "2xl"]}>Contact Me!</Text>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} paddingX={2} paddingY={2} >
                    <a href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target="_blank"> <AiOutlineLinkedin size={50} color="white" ></AiOutlineLinkedin> </a>
                    <a href="https://github.com/leasabus" target="_blank"><AiOutlineGithub size={50} color="white" /></a>
                    <a href="https://portfolio-leandrosabus.netlify.app/" target="_blank"> <BsBriefcase size={50} color="white" /></a>
                    <a href="mailto:leandro.sabus@gmail.com" target="_blank"><AiOutlineMail size={50} color="white" /></a>
                </Stack>
            </Stack>
        </Container>
    )
}
