import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: () => ({
    body: {
      backgroundImage:
        "url('/images/starsNew.svg'), url('/images/bg-gradient.svg')",
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "contain, cover",
      backgroundPosition: "fixed, center",
      /*  bg: mode("#f0e7db", "#202023")(props), */
    },
  }),
};

const components = {
  Heading: {
    variants: {
      base: {
        fontSize: 40,
        color: "#D85314 ",
        textTransform: "uppercase",
        textShadow:
          "1px 1px 0 #F39F06, -1px -1px 0 #F39F06, 1px -1px 0 #F39F06, -1px 1px 0 #F39F06, 1px 1px 0 #F39F06;",
        letterSpacing: "wider",
      },
      md: {
        fontSize: 64,
        color: "#D85314 ",
        textTransform: "uppercase",
        textShadow:
          "1px 1px 0 #F39F06, -1px -1px 0 #F39F06, 1px -1px 0 #F39F06, -1px 1px 0 #F39F06, 1px 1px 0 #F39F06;",
        letterSpacing: "wider",
      },
      faqBase: {
        fontSize: 42,
        fontWeight: 700,
        color: "#F39F06 ",
        textTransform: "uppercase",
        letterSpacing: "wider",
      },
      faqMd: {
        fontSize: 84,
        fontWeight: 700,
        color: "#F39F06 ",
        textTransform: "uppercase",
        letterSpacing: "wider",
      },
      faqBodyBase: {
        fontSize: 14,
        fontWeight: 700,
        color: "#F39F06 ",
        textTransform: "uppercase",
        letterSpacing: "wider",
      },
      faqBodyMd: {
        fontSize: 20,
        fontWeight: 700,
        color: "#F39F06 ",
        textTransform: "uppercase",
        letterSpacing: "wider",
      },
    },
  },
  Link: {
    baseStyle: {
      color: "white",
      textUnderlineOffset: 3,
    },
    variants: {
      "nav-bar-item": {
        textTransform: "uppercase",
      },
    },
  },
  MenuButton: {
    baseStyle: {
      color: "white",
      textUnderlineOffset: 3,
    },
    variants: {
      "nav-bar-item": {
        textTransform: "uppercase",
      },
    },
  },
};

const fonts = {
  heading: "'Montserrat'",
};

const colors = {
  glassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
