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

const Faq = () => {
  return (
    <div id="faq">
      <Section delay={1.8}>
        <Container maxW="container.lg" mb={52}>
          <Box borderRadius="lg" overflow="hidden" pb={5}>
            <Heading
              as="h2"
              textAlign="center"
              variant={{ base: "faqBase", md: "faqMd" }}
            >
              FAQ
            </Heading>
          </Box>

          <Box borderRadius="lg" overflow="hidden" pb={10}>
            <Box
              mb={2}
              p={3}
              textAlign="center"
              bg="#D85314"
              css={{ backdropFilter: "blur(10px)" }}
            >
              <Heading
                as="h2"
                pl={2}
                textAlign="center"
                variant={{ base: "faqBodyBase", md: "faqBodyMd" }}
              >
                What is the Angels & Devils genesis collection?
              </Heading>
            </Box>
            <Box>
              <Paragraph style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                Angels & Devils is a hand-drawn, 10,000 piece NFT collection
                featuring 5,000 Angels and 5,000 Devils. Genesis holders will
                continue to receive the most utility from the Celestial Studios
                universe as it expands to Celestial Tales Comic Book, Celestial
                Beasts, Blockchain Gaming and beyond!
              </Paragraph>
            </Box>
          </Box>

          <Box borderRadius="lg" overflow="hidden" pb={10}>
            <Box
              mb={2}
              p={3}
              textAlign="center"
              bg="#D85314"
              css={{ backdropFilter: "blur(10px)" }}
            >
              <Heading
                as="h2"
                pl={2}
                textAlign="center"
                variant={{ base: "faqBodyBase", md: "faqBodyMd" }}
              >
                When was the project minted?
              </Heading>
            </Box>
            <Box>
              <Paragraph style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                In February 2022, all 10,000 genesis Angels & Devils were sold
                out in a public sale…in under 1 minute! Since then, we ve
                released a merchandise collection, Celestial Tales Comic Book,
                300 Alpha Pass NFTs, an Alpha on NFT Worlds metaverse, $WRLD
                airdrops for staking and more!
              </Paragraph>
            </Box>
          </Box>
          <Box borderRadius="lg" overflow="hidden" pb={10}>
            <Box
              mb={2}
              p={3}
              textAlign="center"
              bg="#D85314"
              css={{ backdropFilter: "blur(10px)" }}
            >
              <Heading
                as="h2"
                pl={2}
                textAlign="center"
                variant={{ base: "faqBodyBase", md: "faqBodyMd" }}
              >
                Why did we decide to rebrand?
              </Heading>
            </Box>
            <Box>
              <Paragraph style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                As soon as NFT Worlds was restricted by Minecraft, we decided to
                rebrand our company to Celestial Studios, in order to house all
                of our NFT collections, P2E games, Comic Book, and more under
                one umbrella. This allows us to create all core content in-house
                and continue to deliver for our holders!
              </Paragraph>
            </Box>
          </Box>

          <Box pt={20}>
            <Flex mt={5} ml={3} mr={3} mb={5} alignItems="center" gap={30}>
              <Box>
                <p style={{ fontSize: "18px" }}>
                  ©2022 Celestial Studios. All Rights Reserved.
                </p>
              </Box>
              <Spacer />
              <Box>
                <p style={{ fontSize: "18px" }}>Terms & Conditions</p>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Section>
    </div>
  );
};

export default Faq;
