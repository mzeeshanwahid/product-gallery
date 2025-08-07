import { Box, Grid } from "@chakra-ui/react";
import type { ProductAPIResponse, ProductInfo } from "../../interfaces";
import PaginationComponent from "../common/Pagination";
import ProductCard from "./Card";

const ProductFeed = () => {
  const products: ProductAPIResponse = {
    data: [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9.99,
        rating: 2.5,
        brand: "Essence",
        availabilityStatus: "99",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      },
      {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        description:
          "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        price: 19.99,
        rating: 2.86,
        brand: "Glamour Beauty",
        availabilityStatus: "34",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      },
      {
        id: 3,
        title: "Powder Canister",
        description:
          "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        category: "beauty",
        price: 14.99,
        rating: 4.64,
        brand: "Velvet Touch",
        availabilityStatus: "89",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
      },
      {
        id: 4,
        title: "Red Lipstick",
        description:
          "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        category: "beauty",
        price: 12.99,
        rating: 4.36,
        brand: "Chic Cosmetics",
        availabilityStatus: "91",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
      },
      {
        id: 5,
        title: "Red Nail Polish",
        description:
          "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        category: "beauty",
        price: 8.99,
        rating: 4.32,
        brand: "Nail Couture",
        availabilityStatus: "79",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
      },
      {
        id: 6,
        title: "Calvin Klein CK One",
        description:
          "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        category: "fragrances",
        price: 49.99,
        rating: 4.37,
        brand: "Calvin Klein",
        availabilityStatus: "29",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
      },
      {
        id: 7,
        title: "Chanel Coco Noir Eau De",
        description:
          "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        category: "fragrances",
        price: 129.99,
        rating: 4.26,
        brand: "Chanel",
        availabilityStatus: "58",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
      },
      {
        id: 8,
        title: "Dior J'adore",
        description:
          "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        category: "fragrances",
        price: 89.99,
        rating: 3.8,
        brand: "Dior",
        availabilityStatus: "98",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
      },
      {
        id: 9,
        title: "Dolce Shine Eau de",
        description:
          "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        category: "fragrances",
        price: 69.99,
        rating: 3.96,
        brand: "Dolce & Gabbana",
        availabilityStatus: "4",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
      },
      {
        id: 10,
        title: "Gucci Bloom Eau de",
        description:
          "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        category: "fragrances",
        price: 79.99,
        rating: 2.74,
        brand: "Gucci",
        availabilityStatus: "91",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
      },
    ],
    pagination: {
      pageNo: 1,
      pageSize: 10,
      totalItems: 194,
      totalPages: 20,
    },
  };

  const onPageChange = (e: any) => {
    console.log(`Page Changed: ${e.page}`);
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
        {products.data.map((product: ProductInfo) => (
          <ProductCard product={product} key={product.id.toString()} />
        ))}
      </Grid>

      <Box my="10" display="flex" justifyContent="center">
        <PaginationComponent
          count={20}
          pageSize={10}
          defaultPage={1}
          onPageChange={onPageChange}
        />
      </Box>
    </>
  );
};

export default ProductFeed;

