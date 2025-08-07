import { Box } from "@chakra-ui/react";
import type { TextPillProps } from "../../interfaces";

const TextPill = ({ text, isSelcted, onClick }: TextPillProps) => {
  return (
    <Box
      m={2}
      px={5}
      py={2}
      bg={isSelcted ? "skyblue" : "lightgray"}
      onClick={() => onClick(text)}
      cursor="pointer"
      display="inline-block"
      borderRadius="20px"
    >
      {text}
    </Box>
  );
};

export default TextPill;
