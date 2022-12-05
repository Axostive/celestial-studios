import AlphaPassCarousel from "./alpha-pass-carousel";
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

const AlphaPass = () => {
  return (
    <div id="alpha-pass">
      <Section delay={0.9}>
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
                A&D ALPHA PASS
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
                    The Angels & Devils Alpha Pass NFT is your exclusive key to
                    Celestial World, our new game in the making.
                  </Paragraph>
                </Box>
                <Spacer />
                <Box>
                  <NextLink
                    href="https://opensea.io/collection/celestial-world-alpha-pass"
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
              <AlphaPassCarousel />
            </Box>
          </Box>
        </Container>
      </Section>
    </div>
  );
};

export default AlphaPass;
