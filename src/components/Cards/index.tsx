import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { benefits } from "./benefits";

export function Cards() {
  return (
    <Flex bg="gray.100">
      <Box maxW="7xl" mx="auto">
        <Box d="flex" flexDirection="column" alignItems="center">
          {benefits.map((benefit) => (
            <>
              <Text
                as="h1"
                fontSize={["3xl", "5xl"]}
                fontWeight="bold"
                color="gray.800"
                aria-label="Titulo"                
              >
                {benefit.name}
              </Text>
              <Text
                as="p"
                mt="3"
                maxW={["md", "md"]}
                color="blue.500"
                fontWeight={["bold", "bold"]}
                fontSize={["sm", "lg"]}
                aria-label="Subtitulo"
                p="4"
                textAlign="justify"
              >
                {benefit.subtitle}
              </Text>
            </>
          ))}
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
          <SimpleGrid columns={[1, 2]} spacing="4" >
            {benefits.map((benefits) => (
              <>
                <Box p="6">
                  <Text
                    as="h2"
                    fontSize={["xl", "4xl"]}
                    fontWeight="bold"
                    textColor="gray.800"
                    d="flex"
                    alignItems="center"                    
                  > 
                    {benefits.play}
                    {benefits.community}
                    {benefits.customer}
                    {benefits.crown}                   
                    {benefits.title}
                  </Text>
                  <Text
                    as="p"
                    mt="4"
                    fontSize={["sm", "xl"]}
                    fontWeight="medium"
                    textColor="gray.500"
                  >
                    {benefits.description}
                  </Text>
                </Box>
              </>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Flex>
  );
}
