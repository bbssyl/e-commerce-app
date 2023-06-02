"use client";
import ProductCardComponent from "@/components/product/ProductsCardComponent";
import { fetchCategorisedProducts } from "@/slices/productsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategorisedProducts = ({ params }) => {
  const dispatch = useDispatch();
  const { categorisedProducts } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCategorisedProducts(params.category[1]));
  }, [dispatch]);

  return (
    <>
      {categorisedProducts.length > 0 && (
        <ProductCardComponent products={categorisedProducts} />
      )}
    </>
  );
};

export default CategorisedProducts;
