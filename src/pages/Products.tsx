import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductFeed from "../components/products/Feed";
import ProductFilters from "../components/products/Filters";
import type { Pagination, ProductInfo } from "../interfaces";
import PrimaryLayout from "../layouts/PrimaryLayout";
import { getProducts } from "../services/products";
import NoProductResult from "../components/products/NoResult";

const ProductsPage = () => {
  const [productFeed, setProductFeed] = useState<ProductInfo[]>([]);
  const [queryParams, setQueryParams] = useState<string>("");
  const [paginationData, setPaginationData] = useState<Pagination>({
    totalItems: 0,
    pageSize: 10,
    pageNo: 1,
    totalPages: 1,
  });
  const [pageNo, setPageNo] = useState<number>(1);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      const response = await getProducts(pageNo, queryParams);

      if (response && response.pagination.totalItems > 0) {
        // console.log(`Result: ${JSON.stringify(response)}`);
        console.log(`Product Fetched`);

        setProductFeed(response.data);
        setPaginationData(response.pagination);
        setNoResult(false);
      } else {
        setNoResult(true);
      }
    }

    getAllProducts();
  }, [pageNo, queryParams]);

  const onApplyFilters = (query: string) => {
    console.log(`Query: ${query}`);
    setQueryParams(query);
  };

  return (
    <PrimaryLayout>
      <Grid
        templateColumns={{ base: "1fr", md: "30% 70%" }}
        gap={6}
        p={5}
        mt={[0, 0, 5]}
      >
        <GridItem>
          <ProductFilters onApply={onApplyFilters} />
        </GridItem>
        <GridItem pr={[0, 0, 10]}>
          {noResult ? (
            <NoProductResult />
          ) : (
            <ProductFeed
              products={productFeed}
              pagination={paginationData}
              onPageChange={setPageNo}
            />
          )}
        </GridItem>
      </Grid>
    </PrimaryLayout>
  );
};

export default ProductsPage;

