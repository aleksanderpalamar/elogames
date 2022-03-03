import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export function Info() {
  return (
    <Flex bg="gray.100">
      <Box maxW="7xl" mx="auto" p="2">
        <Box
          d="flex"
          flexDirection="column"
          alignItems="center"
          border="1px solid #202024"
          p="4"
          borderRadius="lg"
          bg="gray.800"
        >
          <Heading
            as="h2"
            fontSize={["xl", "4xl"]}
            fontWeight="bold"
            textColor="gray.100"
            d="flex"
            alignItems="center"
          >
            Chegue primeiro, ganhe vantagens e faça parte dessa história.
          </Heading>
          <Text
            as="p"
            mt="4"
            fontSize={["sm", "xl"]}
            fontWeight="medium"
            textColor="gray.300"
          >
            Inscreva-se e tenha prioridade para aproveitar o nosso app e receber
            benefícios. Seja um dos pioneiros e nos ajude nessa fase de
            desenvolvimento, para deixá-lo cada vez mais adaptado às suas
            necessidades e da sua comunidade gamer.
          </Text>
          <Button colorScheme="green" rounded="full" size="lg" mt="16" mb="4">
            <Link href="#formulario">
              <a>
                <Text fontWeight="bold">Tenho interesse</Text>
              </a>
            </Link>
          </Button>
        </Box>
        <Stack
          mt="12"
          spacing="4"
          flex="grid"
          flexDirection="column"
          gap="6"
          maxW="4xl"
          mx="auto"
        >
          <SimpleGrid columns={[1, 2]} spacing="4"></SimpleGrid>
        </Stack>
      </Box>
    </Flex>
  );
}
