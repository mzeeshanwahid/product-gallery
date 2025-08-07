import { Box } from "@chakra-ui/react";
import type { PrimaryLayoutProps } from "../interfaces";
import Footer from "./Footer";
import Header from "./Header";

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <Box
      minH="100vh"
      w="100%"
      bg="whitesmoke"
      m="0"
      p="0"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Box flex="1 1 auto">{children}</Box>
      <Footer />
    </Box>
  );
};

export default PrimaryLayout;
