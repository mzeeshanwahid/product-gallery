import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      bg="gray.100"
      w="100%"
      position="fixed"
      left={0}
      bottom={0}
      zIndex={10}
    >
      <Text textAlign="center" color="gray.600" fontSize="sm">
        © {new Date().getFullYear()} Product Gallery. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
