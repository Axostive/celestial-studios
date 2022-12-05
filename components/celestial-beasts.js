import CelestialBeastsCarousel from "./celestial-beasts-carousel";
import Section from "../components/section";
import {
  Container,
  Heading,
  Box,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";

const CelestialBeasts = () => {
  return (
    <div id="celestial-beasts">
      <Section delay={1.2}>
        <Container maxW="container.lg" mb={52}>
          <Box borderRadius="lg" overflow="hidden">
            <Box
              mb={2}
              p={3}
              textAlign="center"
              bg="#D85314"
              css={{ backdropFilter: "blur(10px)" }}
            >
              <Heading
                as="h2"
                textAlign="center"
                variant={{ base: "base", md: "md" }}
              >
                CELESTIAL BEASTS
              </Heading>

              <Flex
                mt={5}
                ml={3}
                mr={3}
                mb={5}
                alignItems="center"
                gap={30}
                flexDirection={{
                  base: "column",
                  md: "column",
                  sm: "column",
                  lg: "row",
                }}
              >
                <Box>
                  <Paragraph>
                    Celestial Beasts is a hand-drawn 10,000 NFT collection with
                    a P2E metaverse being built on NFT Worlds!
                  </Paragraph>
                </Box>
                <Spacer />
                <Box>
                  <Button variant="outline" fontWeight={700} bg="#881A13">
                    GET INFORMATION
                  </Button>
                </Box>
              </Flex>
            </Box>

            <Box
              borderRadius="lg"
              mt={2}
              textAlign="center"
              css={{ backdropFilter: "blur(10px)" }}
            >
              <CelestialBeastsCarousel />
            </Box>
          </Box>
        </Container>
      </Section>
    </div>
  );
};

export default CelestialBeasts;
