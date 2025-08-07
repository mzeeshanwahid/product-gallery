import { Flex, Box } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const HeaderMenu = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="flex-end"
      w="100%"
      h="inherit"
      px={8}
      bg="white"
    >
      <Box display="flex" gap="8">
        <MenuItem name="Home"/>
        <MenuItem name="Products"/>
      </Box>
    </Flex>
  );
};

export default HeaderMenu;