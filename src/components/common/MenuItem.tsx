import { Box, Text } from "@chakra-ui/react";
import type { MenuItemProps } from "../../interfaces";

const MenuItem = ({ name }: MenuItemProps) => {
  return (
    <Box
      w="100%"
      h="80px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
    >
      <Text
        fontWeight="400"
        fontSize={["14px", "14px", "18px"]}
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          width: "0%",
          height: "2px",
          bottom: "-2px",
          left: "0",
          bg: "black",
          transition: "width 0.3s ease-in-out",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
        }}
      >
        {name}
      </Text>
    </Box>
  );
};

export default MenuItem;

