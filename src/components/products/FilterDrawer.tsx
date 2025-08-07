import { Box, Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useState } from "react";
import type { FilterDrawerProps, Sorting } from "../../interfaces";
import Categories from "../common/Categories";
import PriceRange from "../common/PriceRange";
import Search from "../common/Search";
import Sort from "../common/Sort";

const FilterDrawer = ({ onApply }: FilterDrawerProps) => {
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

    onApply("");
  };

  return (
    <Drawer.Root key="filters-drawer" placement="start">
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Filters & Sorting
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content roundedBottom="l3">
            <Drawer.Header>
              <Drawer.Title>Filters & Sorting</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Box display="flex" flexDir="column" gap={5}>
                <Search search={search} setSearch={setSearch} />
                <PriceRange price={price} setPrice={setPrice} />
                <Categories category={category} setCategory={setCategory} />
                <Sort sorting={sorting} setSorting={setSorting} />
              </Box>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear
                </Button>
              </Drawer.ActionTrigger>
              <Drawer.ActionTrigger asChild>
                <Button onClick={applyFilters}>Apply</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default FilterDrawer;

