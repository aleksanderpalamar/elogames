/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Features() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="div"
      w="100%"
      height="100vh"
      mx="auto"
      d="flex"
      position="relative"
    >
      <Box as="div" w="100%" position="absolute" pt="6" pb="16">
        <SimpleGrid mt="12" columns={[1, 2]} spacing={[4, 8, 16]}>
        {isMobileVersion && (
            <Box
              as="div"
              mt="5"
              maxW="md"
              mx="auto"
              display="flex"
              justifyContent="center"
            >
              <Img
                w="450"
                h="450"
                src="./images/console.svg"
                aria-label="Imagem Console"
              />
            </Box>
          )}
          <Box as="main" mt="16" mx="auto" maxW="7xl" px="4">            
            <Text
              as="h1"
              fontSize={["5xl", "6xl"]}
              fontWeight="extrabold"
              color="gray.800"
              aria-label="Mais tempo pra jogar, menos tempo fazendo login"
            >
              Mais tempo pra jogar, menos tempo fazendo login.
            </Text>
            <Text
              as="p"
              mt="3"
              maxW={["md", "md"]}
              mx="auto"
              color="gray.500"
              fontWeight={["bold", "bold"]}
              fontSize={["sm", "lg"]}
              aria-label="Texto"
            >
              Criamos um produto que facilita sua conexão com suas diferentes plataformas de jogo
              seja Playstation, Nintendo Switch, PC, ou celular, não importa. Agora todas elas podem 
              girar em torno do seu próprio mundo.
            </Text>
            <Text
              as="p"
              mt="3"
              maxW={["md", "md"]}
              mx="auto"
              color="blue.500"
              fontWeight={["bold", "bold"]}
              fontSize={["sm", "lg"]}
              aria-label="Você está no controle"
            >
              Você está no controle.
            </Text>
          </Box>          
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
