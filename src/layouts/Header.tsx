import { Box, Image } from "@chakra-ui/react";
import LogoImg from "../assets/images/logo.png";
import HeaderMenu from "../components/common/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      w="100%"
      bg="white"
      h="60px"
      display="flex"
      gap="10"
      alignItems="center"
      justifyContent="start"
      ps="10"
    >
      <Link to="/">
        <Image
          src={LogoImg}
          width="200px"
          height="auto"
          objectFit="contain"
          alt="logo"
        />
      </Link>
      <HeaderMenu />
    </Box>
  );
};

export default Header;

