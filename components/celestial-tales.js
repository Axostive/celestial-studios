import CelestialTalesCarousel from "../components/celestial-tales-carousel";
import Section from "../components/section";
import {
  Container,
  Heading,
  Box,
  Button,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";

const CelestialTales = () => {
  return (
    <div id="celestial-tales">
      <Section delay={0.6}>
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
                Celestial Tales
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
                    a P2E metaverse being built on NFT Worlds.
                    <NextLink href="/celestial-tales" passHref scroll={false}>
                      <Button variant="link" fontWeight={700}>
                        <u>READ THE COMICS HERE!</u>
                      </Button>
                    </NextLink>
                  </Paragraph>
                </Box>
                <Spacer />
                <Box>
                  <NextLink
                    href="https://www.youtube.com/watch?v=xL5sgICVigI"
                    passHref
                    scroll={false}
                  >
                    <Button
                      variant="outline"
                      fontWeight={700}
                      bg="#881A13"
                      mb={2}
                    >
                      PICK A SIDE (ANTHEM)
                    </Button>
                  </NextLink>
                </Box>
              </Flex>
            </Box>

            <Box
              borderRadius="lg"
              mt={2}
              textAlign="center"
              css={{ backdropFilter: "blur(10px)" }}
            >
              <CelestialTalesCarousel />
            </Box>
          </Box>
        </Container>
      </Section>
    </div>
  );
};

export default CelestialTales;
