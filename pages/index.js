import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Image,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mt={20}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello there! I&apos;m a developer currently living in Brazil..
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from "../components/chakra";
