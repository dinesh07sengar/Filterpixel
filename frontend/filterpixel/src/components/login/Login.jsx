import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    VStack,
    Checkbox,
    Link,
    Image,
    Flex,
    Box,
    Text
} from '@chakra-ui/react';
import axios from "axios"

export const Login = () => {
    const [state, setstate] = useState({ name: "", email: "", password: "" })
    const [create, setcreate] = useState(false)
    const handlechange = (e) => {
        const { name, value } = e.target;
        setstate((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }
    const handlesubmit = (e) => {
        e.preventDefault();
        if(create){
            axios.post("http://localhost:4800/user/register", state)
            .then((d) => { console.log(d) })
            .catch((err) => {
              console.log(err)
            })
          
        }
        else{
            const data={email:state.email,password:state.password}
            axios.post("http://localhost:4800/user/register", data)
            .then((d) => { console.log(d) })
            .catch((err) => {
              console.log(err)
            })

        }
        console.log("yha hai")
    }
    return (
        <div>
            <Stack minH="90vh" direction={{ base: 'column-reverse', md: 'row' }} >
                <Flex flex={1}>
                    <Image alt="Cover image" objectFit="cover" src="https://rb.gy/rp38q" />
                </Flex>
                <Flex p={8} flex={1} align="center" justify="center" >
                    <Stack spacing={4}>
                        <Stack align="center">
                            <Heading fontSize="2xl">Sign in to your account</Heading>
                        </Stack>
                        <VStack
                            as="form"
                            spacing={8}
                            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            h="max-content !important"
                            bg={useColorModeValue('white', 'gray.700')}
                            rounded="lg"
                            boxShadow="lg"
                            p={{ base: 5, sm: 10 }}
                            onSubmit={handlesubmit}
                        >
                            <VStack spacing={4} w="100%">
                                {create ?
                                    <FormControl id="name" >
                                        <FormLabel >Name</FormLabel>
                                        <Input rounded="md" type="text" name='name' onChange={handlechange} />
                                    </FormControl>
                                    : null}
                                <FormControl id="email" >
                                    <FormLabel >Email</FormLabel>
                                    <Input rounded="md" type="email" name='email' onChange={handlechange} />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input rounded="md" type="password" name='password' onChange={handlechange} />
                                </FormControl>
                            </VStack>
                            <VStack w="100%">
                                <Stack direction="row" justify="space-between" w="100%">
                                    <Checkbox colorScheme="green" size="md">
                                        Remember me
                                    </Checkbox>
                                    <Link fontSize={{ base: 'md', sm: 'md' }} onClick={() => setcreate(!create)}>create account?</Link>
                                </Stack>
                                <Button
                                    bg="green.300"
                                    color="white"
                                    _hover={{
                                        bg: 'green.500'
                                    }}
                                    rounded="md"
                                    w="100%"
                                    type='submit'
                                >
                                    Sign in
                                </Button>
                            </VStack>
                        </VStack>
                        <Stack>
                            <Box borderRadius={"50%"} w={"10%"} margin={"auto"}>
                                <Text>OR</Text>
                            </Box>
                            <Box>
                                <a href="http://localhost:4800/check/google/auth"><Button bg="green.300" _hover={{ bg: 'green.500' }}
                                    rounded="md" fontSize={"xl"} size={"lg"} w={"80%"} color={"white"} > Login with google</Button></a>
                            </Box>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </div>
    );
}
