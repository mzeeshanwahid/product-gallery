import { Box, Button, Heading } from "@chakra-ui/react";
import { categories } from "../../data";
import type { CategoryProps } from "../../interfaces";
import ChakraSelect from "./ChakraSelect";

const Categories = ({ category, setCategory }: CategoryProps) => {
  return (
    <Box mb={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Heading size="md">Category</Heading>
        <Button variant="ghost" onClick={() => setCategory("")}>
          Clear Filter
        </Button>
      </Box>
      <ChakraSelect
        items={categories}
        placeholder="Select Category"
        category={category}
        setCategory={setCategory}
      />
    </Box>
  );
};

export default Categories;

