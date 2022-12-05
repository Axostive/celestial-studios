import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SiDiscord, SiTwitter } from "react-icons/si";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

const Navbar = (props) => {
  const { path } = props;

  if (path == "/celestial-tales") {
    var isCelestialTales = true;
  } else {
    var isCelestialTales = false;
  }

  console.log(path);

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#0D1625", "#0D1625")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={3}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={14}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}></Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          justify="space-evenly"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link
            p={2}
            href="/"
            variant="nav-bar-item"
            style={{ visibility: isCelestialTales ? "hidden" : "" }}
          >
            Home
          </Link>

          <Link
            p={2}
            variant="nav-bar-item"
            style={{ visibility: isCelestialTales ? "hidden" : "" }}
          >
            <ScrollLink
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to="angels-devils"
            >
              Collection
            </ScrollLink>
          </Link>

          <Link
            variant="nav-bar-item"
            style={{ visibility: isCelestialTales ? "hidden" : "visible" }}
          >
            <ScrollLink
              smooth={true}
              duration={500}
              offset={-85}
              to="celestial-tales"
            >
              Comics
            </ScrollLink>
          </Link>
          {/*  <Menu>
            <MenuButton variant="nav-bar-item">COMICS</MenuButton>
            <MenuList>
              <MenuItem>
                <Link variant="nav-bar-item">
                  <ScrollLink
                    smooth={true}
                    duration={500}
                    offset={-85}
                    to="celestial-tales"
                  >
                    Get me there!
                  </ScrollLink>
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link variant="nav-bar-item">
                  <ScrollLink
                    smooth={true}
                    duration={500}
                    offset={-85}
                    to="celestial-tales"
                  ></ScrollLink>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu> */}
          <Link
            style={{ visibility: isCelestialTales ? "hidden" : "", gap: 4 }}
            p={2}
            href="/"
            display="inline-flex"
            alignItems="center"
            pl={2}
          >
            <Image
              borderRadius="full"
              src="/images/home-button.svg"
              alt="Profile image"
              width="32px"
              height="32px"
              transition=".2s"
              _hover={{
                transition: ".2s",
                transform: "rotate(-20deg) scale(1.5)",
              }}
            />
          </Link>

          <Link
            p={2}
            variant="nav-bar-item"
            style={{ visibility: isCelestialTales ? "hidden" : "" }}
          >
            <ScrollLink smooth={true} duration={500} offset={-180} to="roadmap">
              Roadmap
            </ScrollLink>
          </Link>

          <Link
            p={2}
            variant="nav-bar-item"
            style={{ visibility: isCelestialTales ? "hidden" : "" }}
          >
            <ScrollLink smooth={true} duration={500} offset={-60} to="faq">
              Faq
            </ScrollLink>
          </Link>

          <Link
            style={{ visibility: isCelestialTales ? "hidden" : "", gap: 4 }}
            target="_blank"
            href="https://twitter.com/AngelsDevilsNFT"
            path={path}
            display="inline-flex"
            alignItems="center"
            pl={2}
          >
            <SiTwitter />
          </Link>
          <Link
            target="_blank"
            href="https://discord.gg/vg9JhQR66Y"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{
              visibility: isCelestialTales ? "hidden" : "visible",
              gap: 4,
            }}
            pl={2}
          >
            <SiDiscord />
          </Link>
          <Link
            target="_blank"
            href="https://opensea.io/collection/angelsdevilsnft"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ visibility: isCelestialTales ? "hidden" : "", gap: 4 }}
            pl={2}
          >
            <Image src="/images/opensea-logo.svg" width={25} height={25} />
          </Link>
        </Stack>

        <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}
          <Box
            ml={2}
            display={{ base: "inline-block", md: "none" }}
            style={{ visibility: isCelestialTales ? "hidden" : "" }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="" passHref>
                  <MenuItem as={Link}>
                    <ScrollLink
                      smooth={true}
                      duration={500}
                      offset={-60}
                      to="logo"
                    >
                      Home
                    </ScrollLink>
                  </MenuItem>
                </NextLink>
                <NextLink href="" passHref>
                  <MenuItem as={Link}>
                    <ScrollLink
                      smooth={true}
                      duration={500}
                      offset={0}
                      to="angels-devils"
                    >
                      Collection
                    </ScrollLink>
                  </MenuItem>
                </NextLink>
                <NextLink href="" passHref>
                  <MenuItem as={Link}>
                    <ScrollLink
                      smooth={true}
                      duration={500}
                      offset={-65}
                      to="celestial-tales"
                    >
                      Comics
                    </ScrollLink>
                  </MenuItem>
                </NextLink>
                <NextLink href="" passHref>
                  <MenuItem as={Link}>
                    <ScrollLink
                      smooth={true}
                      duration={500}
                      offset={-260}
                      to="roadmap"
                    >
                      Roadmap
                    </ScrollLink>
                  </MenuItem>
                </NextLink>
                <NextLink href="" passHref>
                  <MenuItem as={Link}>
                    <ScrollLink
                      smooth={true}
                      duration={500}
                      offset={-60}
                      to="faq"
                    >
                      FAQ
                    </ScrollLink>
                  </MenuItem>
                </NextLink>
                <MenuDivider />
                <MenuItem
                  icon={<SiTwitter />}
                  as={Link}
                  href="https://twitter.com/AngelsDevilsNFT"
                >
                  Twitter
                </MenuItem>
                <MenuItem
                  icon={<SiDiscord />}
                  as={Link}
                  href="https://discord.gg/vg9JhQR66Y"
                >
                  Discord
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://opensea.io/collection/angelsdevilsnft"
                >
                  <Image
                    src="/images/opensea-logo.svg"
                    width={15}
                    height={15}
                    mr={2}
                  />
                  OpenSea
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
