import { Box, Button, Heading, Text } from "@chakra-ui/react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import type { PriceRangeProps } from "../../interfaces";

const PriceRange = ({ price, setPrice }: PriceRangeProps) => {
  return (
    <Box mb={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Heading size="md">Price Range</Heading>
        <Button variant="ghost">Clear Filter</Button>
      </Box>
      <Box px={3}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Text fontSize={["14px", "14px", "18px"]}>{`$${price[0]}`}</Text>
          <Text fontSize={["14px", "14px", "18px"]}>{`$${price[1]}`}</Text>
        </Box>
        <Slider
          range
          defaultValue={[0, 30000]}
          min={0}
          max={30000}
          allowCross={false}
          value={price}
          onChange={(value: any) => setPrice(value)}
        />
      </Box>
    </Box>
  );
};

export default PriceRange;

