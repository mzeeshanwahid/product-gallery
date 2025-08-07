import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import type { ProductFiltersProps, Sorting } from "../../interfaces";
import Categories from "../common/Categories";
import PriceRange from "../common/PriceRange";
import Search from "../common/Search";
import Sort from "../common/Sort";

const ProductFilters = ({ onApply }: ProductFiltersProps) => {
  const [price, setPrice] = useState([1, 30000]);
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState<Sorting | null>(null);
  const [search, setSearch] = useState("");

  const applyFilters = () => {
    const query: Record<string, string> = {};

    if (price[0] !== 1) query.minPrice = String(price[0]);
    if (price[1] !== 30000) query.maxPrice = String(price[1]);

    if (category.trim() !== "") query.category = category;
    if (search.trim() !== "") query.search = search;
    if (sorting) {
      query.sortField = sorting.value;
      query.sortOrder = sorting.order;
    }

    const queryParams = new URLSearchParams(query).toString();
    onApply(queryParams);
  };

  const clearAllFilters = () => {
    setPrice([1, 30000]);
    setCategory("");
    setSorting(null);
    setSearch("");

    onApply('');
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} boxShadow="md" bg="white">
      <Heading size="xl" mb={5}>
        Filters & Sorting
      </Heading>

      <Box display="flex" flexDir="column" gap={5}>
        <Search search={search} setSearch={setSearch} />
        <PriceRange price={price} setPrice={setPrice} />
        <Categories category={category} setCategory={setCategory} />
        <Sort sorting={sorting} setSorting={setSorting} />

        <Box display="flex" flexDir="column" gap={3}>
          <Button colorScheme="teal" w="full" onClick={applyFilters}>
            Apply Filters
          </Button>

          <Button variant="outline" w="full" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductFilters;

