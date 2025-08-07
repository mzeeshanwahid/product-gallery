import { Grid, GridItem } from "@chakra-ui/react";
import ProductFeed from "../components/products/Feed";
import ProductFilters from "../components/products/Filters";
import PrimaryLayout from "../layouts/PrimaryLayout";

const ProductsPage = () => {
  return (
    <PrimaryLayout>
      <Grid
        templateColumns={{ base: "1fr", md: "30% 70%" }}
        gap={6}
        p={5}
        mt={[0, 0, 5]}
      >
        <GridItem>
          <ProductFilters />
        </GridItem>
        <GridItem pr={[0, 0, 10]}>
          <ProductFeed />
        </GridItem>
      </Grid>
    </PrimaryLayout>
  );
};

export default ProductsPage;

