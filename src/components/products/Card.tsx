import { Badge, Box, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import type { ProductCardProps } from "../../interfaces";
import Rating from "../common/Rating";

const ProductCard = ({ product }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  const firstImage = product.thumbnail;
  const secondImage =
    product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      maxW="400px"
      bg="white"
    >
      <Box position="relative" w="100%" h="220px" overflow="hidden">
        <Image
          src={firstImage}
          alt={product.title}
          objectFit="contain"
          w="100%"
          h="100%"
          position="absolute"
          top={0}
          left={0}
          transition="opacity 0.4s ease-in-out"
          opacity={hovered ? 0 : 1}
        />
        <Image
          src={secondImage}
          alt={product.title}
          objectFit="contain"
          w="100%"
          h="100%"
          position="absolute"
          top={0}
          left={0}
          transition="opacity 0.4s ease-in-out"
          opacity={hovered ? 1 : 0}
        />
      </Box>

      {/* Product Info */}
      <Box p="4">
        <Stack>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize="lg">
              {product.title}
            </Text>
            <Badge colorScheme="teal" fontSize="0.8em">
              {product.category}
            </Badge>
          </Box>

          <Text fontSize="sm" color="gray.600">
            {product.description
              ? `${product.description.substring(0, 110)}...`
              : ""}
          </Text>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize="md" color="teal.500">
              ${product.price.toFixed(2)}
            </Text>
            <Rating value={product.rating || 0} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;

