import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import { useState, useEffect } from "react";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    )
  );
}

export default Website;
