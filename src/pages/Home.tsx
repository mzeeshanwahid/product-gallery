import { Box, Image, Text } from "@chakra-ui/react";
import WelcomeImage from "../assets/images/welcome.png";
import PrimaryLayout from "../layouts/PrimaryLayout";
import { Link } from "react-router-dom";
import LogoImg from "../assets/images/logo.png";

const HomePage = () => {
  const visitEmperia = () => {
    window.open("https://emperiavr.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <PrimaryLayout>
      <Box
        display="flex"
        w="100%"
        h="100%"
        minH="80vh"
        flexDirection="column"
        gap="10"
        alignItems="center"
        justifyContent="center"
        pb="50px"
      >
        <Image
          src={WelcomeImage}
          w="350px"
          h="auto"
          objectFit="contain"
          mixBlendMode="darken"
        />
        <Box display="flex" alignItems="center" gap={3}>
          <Text fontSize={"20px"} fontWeight="400" color="black">
            Hi 👋,
          </Text>
          <Image
            src={LogoImg}
            width="150px"
            height="auto"
            objectFit="contain"
            onClick={visitEmperia}
            cursor="pointer"
          />
          <Text fontSize={"20px"} fontWeight="400" color="black">
            Team
          </Text>
        </Box>
        <Text fontSize={"20px"} fontWeight="400" color="gray">
          Navigate to <Link to="/products">products page</Link> to explore
          products
        </Text>
      </Box>
    </PrimaryLayout>
  );
};

export default HomePage;

