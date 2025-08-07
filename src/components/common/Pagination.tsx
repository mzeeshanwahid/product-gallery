import { Box, ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { PaginationComponentProps } from "../../interfaces";

const PaginationComponent = ({
  count,
  pageSize,
  defaultPage,
  onPageChange,
}: PaginationComponentProps) => {
  return (
    <Pagination.Root
      count={count}
      pageSize={pageSize}
      defaultPage={defaultPage}
      onPageChange={onPageChange}
    >
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Box display={["none", "none", "block"]}>
          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />
        </Box>
        <Box display={["block", "block", "none"]}>
          <Pagination.PageText />
        </Box>

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};

export default PaginationComponent;

