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

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#0D1625", "#0D1625")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
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
          <LinkItem href="/" variant="nav-bar-item">
            Home
          </LinkItem>
          <LinkItem href="/collection" path={path} variant="nav-bar-item">
            Collection
          </LinkItem>
          <LinkItem href="/comics" path={path} variant="nav-bar-item">
            Comics
          </LinkItem>
          <LinkItem
            href="/"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
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
          </LinkItem>
          <LinkItem href="/roadmap" path={path} variant="nav-bar-item">
            Roadmap
          </LinkItem>
          <LinkItem href="/faq" path={path} variant="nav-bar-item">
            Faq
          </LinkItem>
          <LinkItem
            target="_blank"
            href=""
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <SiTwitter />
          </LinkItem>
          <LinkItem
            target="_blank"
            href=""
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <SiDiscord />
          </LinkItem>
          <LinkItem
            target="_blank"
            href=""
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <Image src="/images/opensea-logo.svg" width={25} height={25} />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          {/*           <ThemeToggleButton />
           */}
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/collection" passHref>
                  <MenuItem as={Link}>Collection</MenuItem>
                </NextLink>
                <NextLink href="/comics" passHref>
                  <MenuItem as={Link}>Comics</MenuItem>
                </NextLink>
                <NextLink href="/roadmap" passHref>
                  <MenuItem as={Link}>Roadmap</MenuItem>
                </NextLink>
                <NextLink href="/faq" passHref>
                  <MenuItem as={Link}>FAQ</MenuItem>
                </NextLink>
                <MenuDivider />
                <MenuItem icon={<SiTwitter />} as={Link} href="">
                  Twitter
                </MenuItem>
                <MenuItem icon={<SiDiscord />} as={Link} href="">
                  Discord
                </MenuItem>
                <MenuItem as={Link} href="">
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
