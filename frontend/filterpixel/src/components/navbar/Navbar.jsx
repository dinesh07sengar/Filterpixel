import { Avatar, Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box p={"2% 1%"}>
        <Flex>
            <Box w={"2.5%"} m={"auto"}>
                <Image src='https://rb.gy/t6bdi' alt='logo'/>
            </Box>
            <Box m={"auto"}><Heading size={"md"}>Pixelfilter</Heading></Box>
            <Spacer/>
            <Box m={"auto"} mr={"1%"}><Button>Singin</Button></Box>
            
            <Box><Avatar src='#' alt='user'/></Box>
        </Flex>
    </Box>
  )
}
