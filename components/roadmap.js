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

const Roadmap = () => {
  return (
    <div id="roadmap">
     <Section delay={1.5}>
        <Container maxW="container.lg" mb={52} mt={10}>
          <Box borderRadius="lg" overflow="hidden">
            <Image
              src="/images/road-map.png"
              alt="Profile image"
              width="full"
              height="full"
            />
          </Box>
        </Container>
      </Section>
    </div>
  );
};

export default Roadmap;
