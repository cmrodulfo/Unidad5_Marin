import React from "react";
import { useState } from "react";
import { Box, Center, Circle, Stack, Button, ButtonGroup } from '@chakra-ui/react'



export const Contador = () => {

    const [numero, setNumero] = useState(0)

    const aumentar = () => {
        setNumero(numero + 1)
    }

    const disminuir = () => {
        setNumero(numero - 1)
    }

    const resetear = () => {
        setNumero(0)
    }


    return (
        <Box >
            <Center bg='blue.300' p='4' color='white' >
                <Box w="75vw" h="50vh" align="center" p="10px">
                    <Circle size='40px' bg='tomato' color='white' w="10vh" my="10vh">
                        <Box as='span' fontWeight='bold' fontSize='lg'>
                            {numero}
                        </Box>
                    </Circle>

                    <Stack direction={['column', 'row']} spacing='36px' align="center" justify="center">
                        <Box>
                            <Button onClick={resetear} colorScheme='gray'>Resetear</Button>
                        </Box>
                        <Box >
                            <Button onClick={disminuir} colorScheme='red'>Disminuir</Button>
                        </Box>
                        <Box >
                            <Button onClick={aumentar} colorScheme='green'>Aumentar</Button>
                        </Box>
                    </Stack>
                </Box>
            </Center>
        </Box>


    )
}