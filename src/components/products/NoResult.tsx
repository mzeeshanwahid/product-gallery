import { Box, Image, Text } from "@chakra-ui/react";
import NoResultImg from "../../assets/images/no_result.png";

const NoProductResult = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="500px"
      gap={10}
    >
      <Image
        src={NoResultImg}
        width="340px"
        height="auto"
        objectFit="contain"
        mixBlendMode="darken"
      />

      <Text fontSize={"20px"} fontWeight="400" color="black" maxW="340px" textAlign="center">
        Oops!! No results are found. <br/>Adjust filters to get some products
      </Text>
    </Box>
  );
};

export default NoProductResult;

