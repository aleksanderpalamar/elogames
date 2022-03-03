/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  FaSteam,
  FaXbox,
  FaPlaystation,
  FaGooglePlay,
  FaTwitch,
  FaYoutube,
  FaFacebook,
  FaApple,
} from "react-icons/fa";
import { Cards } from "../Cards";
import { Info } from "./info";
import { FormContact } from "../FormContact";

export function ContentSections() {
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
      <Box as="div" w="100%" position="absolute" pt="6" pb="16" bg="gray.800">
        <SimpleGrid columns={[1, 2]} spacing={[2, 4, 8]} mt="8">
          <Box as="main" mx="auto" maxW="7xl" px="4" >
            <Text
              as="h1"
              fontSize={["5xl", "6xl"]}
              fontWeight="extrabold"
              color="gray.300"
              aria-label="Titulo da página"
              p="4"
            >
              Conteúdo personalizado: Promoções de acordo com o que faz sentindo
              pra você.
            </Text>
            <Text
              as="p"
              mt="3"
              maxW={["md", "md"]}
              color="red.500"
              fontWeight={["bold", "bold"]}
              fontSize={["sm", "lg"]}
              aria-label="Subtitulo"
              p="4"
              textAlign="justify"
            >
              Você receberá notificação de promoções baseadas nas suas
              preferências. de vídeo e conteúdos de canais gamers preferidos do
              Youtube, Twitch e Facebook Gaming. Ou seja, somente o que mais te
              interessa.
            </Text>                                   
          </Box>
          {isMobileVersion && (
            <SimpleGrid              
              columns={[1, 2]}
              spacing={[2, 4, 8]}
              color="gray.100"
              p="4"
              fontSize={["4xl", "7xl"]}
            >
              <FaSteam />
              <FaXbox />
              <FaPlaystation />
              <FaGooglePlay />
              <FaApple />
              <FaTwitch />
              <FaYoutube />
              <FaFacebook />
            </SimpleGrid>
          )}
        </SimpleGrid>
        <Cards />
        <Info />
        <FormContact />
      </Box>
    </Flex>
  );
}
