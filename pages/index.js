import {
  Container,
  Stack,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import CenterLogo from "../components/center-logo";
import AlphaPass from "../components/alpha-pass";
import CelestialTales from "../components/celestial-tales";
import CelestialBeasts from "../components/celestial-beasts";
import AngelsDevils from "../components/angels-devils";
import "react-multi-carousel/lib/styles.css";
import Roadmap from "../components/roadmap";
import Faq from "../components/faq";

const Home = () => {
  return (
    <Layout>
      <Stack>
        <Container maxW="container.lg" mt={24} mb={32}>
          <div id="logo">
            <CenterLogo />
          </div>
        </Container>

        <AngelsDevils />

        <CelestialTales />

        <AlphaPass />

        <CelestialBeasts />

        <Roadmap />

        <Faq />
      </Stack>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from "../components/chakra";
