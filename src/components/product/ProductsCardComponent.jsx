"use client";

import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CategoriesBarComponent from "../categories/CategoryBarComponent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentLayoutCount,
  setCurrentLayout,
} from "@/slices/categorySlice";

const ProductCardComponent = ({ products }) => {
  const dispatch = useDispatch();
  const { currentLayoutCount, currentLayout } = useSelector(
    (state) => state.categories
  );
  const handleChange = (event) => {
    dispatch(setCurrentLayoutCount(Number(event.target.value)));
    if (currentLayoutCount === 12) {
      dispatch(setCurrentLayout({ xs: 12, sm: 6, lg: 4 }));
    } else {
      dispatch(setCurrentLayout({ xs: 12, sm: 12, lg: 12 }));
    }
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: `column`,
        gap: 2,
        alignItems: "center",
      }}
    >
      <CategoriesBarComponent
        currentShow={currentLayoutCount}
        handleChange={handleChange}
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        sx={{
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {products?.map((product) => {
          return (
            <Grid key={product.id} {...currentLayout}>
              <ProductCard product={product} currentShow={currentLayoutCount} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductCardComponent;
