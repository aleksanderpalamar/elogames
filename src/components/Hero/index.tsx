/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Hero() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="div"
               
      
      
      px={["4", "4", "6"]}
      height="100%"
      position="relative"
      bg="gray.800"
    >
      <Box as="div" w="100%" position="relative" pt="6" pb="16">
        <SimpleGrid mt="12" columns={[1, 2]} spacing={[4, 8, 16]} >
          <Box as="main" mt="16" mx="auto" maxW="7xl" px="4">            
            <Text
              as="h1"
              fontSize={["5xl", "6xl"]}
              fontWeight="extrabold"
              color="gray.100"
              aria-label="Titulo da página"
            >
              Já imaginou todas as suas contas gamers, conteúdo e forma de
              pagamento em um só lugar?
            </Text>
            <Text
              as="p"
              mt="3"
              maxW={["md", "md"]}
              mx="auto"
              color="gray.300"
              fontWeight={["bold", "bold"]}
              fontSize={["sm", "lg"]}
              aria-label="Subtitulo da página"
            >
              Conheça o EloGames: é a solução que vai organizar e agilizar sua
              vida, além de oferecer benefícios promoções e conteúdos
              personalizados, para você dentro de um único espaço.
            </Text>
            <Text
              as="p"
              mt="3"
              maxW={["md", "md"]}
              mx="auto"
              color="yellow.500"
              fontWeight={["bold", "bold"]}
              fontSize={["sm", "lg"]}
              aria-label="Subtitulo da página"
            >
              Tudo isso com a segurança que a Elo tem, agora no mundo gamer também.
            </Text>
          </Box>
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
                w="550"
                h="550"
                src="./images/console.svg"
                aria-label="Imagem Console"
              />
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
