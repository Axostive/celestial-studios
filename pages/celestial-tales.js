import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CELESTIAL_TALES from "../components/celestial-tales-images";
import { Container, Box, IconButton } from "@chakra-ui/react";
import Section from "../components/section";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

class CelestialTalesExpanded extends Component {
  render() {
    return (
      <Section delay={0.6}>
        <Box pt={12} display="flex" justifyContent="center">
          <NextLink href="/" passHref scroll={false}>
            <IconButton
              variant="ghost"
              fontWeight={700}
              bg="#D85314"
              size="lg"
              icon={<ArrowLeftIcon />}
            ></IconButton>
          </NextLink>
        </Box>
        <Container p={6} w={["100%", 500, 500]} h={[500, 600, 900]} mb={20}>
          <Carousel
            showStatus={true}
            showIndicators={false}
            stopOnHover={true}
            emulateTouch={true}
            swipeable={true}
            centerMode={true}
            centerSlidePercentage={90}
          >
            {CELESTIAL_TALES &&
              CELESTIAL_TALES.map((item) => (
                <Box borderRadius="lg" key={item.id}>
                  <img src={item.image} />
                </Box>
              ))}
          </Carousel>
        </Container>
      </Section>
    );
  }
}

export default CelestialTalesExpanded;
