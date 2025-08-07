import { Box, Button, Heading } from "@chakra-ui/react";
import type { Sorting, SortingProps } from "../../interfaces";
import TextPill from "./TextPill";

const Sort = ({ sorting, setSorting }: SortingProps) => {
  const sortingData: Sorting[] = [
    {
      id: "price-low-high",
      value: "price",
      order: "ASC",
      name: "Price: Low to High",
    },
    {
      id: "price-high-low",
      value: "price",
      order: "DESC",
      name: "Price: High to Low",
    },
    { id: "title-a-z", value: "title", order: "ASC", name: "Title: A -> Z" },
    { id: "title-z-a", value: "title", order: "DESC", name: "Title: Z -> A" },
  ];

  return (
    <Box mb={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Heading size="md">Sorting</Heading>
        <Button variant="ghost" onClick={() => setSorting(null)}>
          Clear Filter
        </Button>
      </Box>
      {sortingData.map((sortItem: Sorting) => (
        <TextPill
          key={sortItem.id}
          text={sortItem.name}
          isSelcted={sorting ? sorting.id === sortItem.id : false}
          onClick={() => setSorting(sortItem)}
        />
      ))}
    </Box>
  );
};

export default Sort;

