import AngelDevilsCarousel from "../components/angels-devils-carousel";
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

const AngelsDevils = () => {
  return (
    <div id="angels-devils">
      <Section delay={0.3}>
        <Container maxW="container.lg" mb={52}>
          <Box borderRadius="lg" overflow="hidden" mt={24}>
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
                Angels & Devils
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
                    Angels & Devils is a hand-drawn 10,000 NFT collection with a
                    P2E metaverse being built on NFT Worlds!
                  </Paragraph>
                </Box>
                <Spacer />
                <Box>
                  <NextLink
                    href="https://opensea.io/collection/angelsdevilsnft"
                    passHref
                    scroll={false}
                  >
                    <Button variant="outline" fontWeight={700} bg="#881A13">
                      BUY ON OPENSEA
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
              <AngelDevilsCarousel />
            </Box>
          </Box>
        </Container>
      </Section>
    </div>
  );
};

export default AngelsDevils;
