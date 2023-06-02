"use client";
import ProductsCardComponent from "@/components/product/ProductsCardComponent";
import { fetchProducts } from "@/slices/productsSlice";
import { Box, Card, CardContent, Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {products.length > 0 ? (
        <ProductsCardComponent products={products} />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Skeleton variant="text" width="100%" height={50} />
          <Box sx={{ m: 2 }}>
            <Skeleton variant="rectangular" width={345} height={350} />
            <Skeleton variant="text" width={345} />
            <Skeleton variant="text" width={150} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductsPage;
