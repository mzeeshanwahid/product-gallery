import { Box, Grid } from "@chakra-ui/react";
import type {
  ProductFeedProps,
  ProductInfo
} from "../../interfaces";
import PaginationComponent from "../common/Pagination";
import ProductCard from "./Card";

const ProductFeed = ({ products, pagination, onPageChange }: ProductFeedProps) => {
  const onChange = (e: any) => {
    onPageChange(e.page);
  };

  return (
    <>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap="6"
      >
        {products.map((product: ProductInfo) => (
          <ProductCard product={product} key={product.id.toString()} />
        ))}
      </Grid>

      <Box my="10" display="flex" justifyContent="center">
        <PaginationComponent
          count={pagination.totalItems}
          pageSize={pagination.pageSize}
          defaultPage={1}
          onPageChange={onChange}
        />
      </Box>
    </>
  );
};

export default ProductFeed;

