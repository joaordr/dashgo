import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>
                            João Rodrigo Prieto
                        </Text>
                        <Text color="gray.300" fontSize="small">
                            jrp2033@gmail.com
                        </Text>
                    </Box>
                    <Avatar size="md" name="João Rodrigo" src="https://github.com/joaordr.png" />
                </Flex>
    )
}