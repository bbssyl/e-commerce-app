"use client";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { removeFromCart } from "@/slices/productsSlice";
const CartComponents = ({ handleCartClose }) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.products);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Box
      sx={{
        width: 350,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="button" sx={{ fontWeight: 600 }}>
          Carts
        </Typography>
        <IconButton onClick={handleCartClose}>
          <ClearIcon />
        </IconButton>
      </Box>
      {cartProducts?.map((cart) => {
        return (
          <Box
            key={cart.id}
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: 1,
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Image
                src={cart.thumbnail}
                alt={cart.thumbnail}
                width={100}
                height={100}
                loading="lazy"
              />
              <Box>
                <Typography sx={{ fontWeight: 600 }}>{cart.title}</Typography>
                <Typography variant="caption">${cart.price}</Typography>
                <Typography variant="caption">x1</Typography>
              </Box>
            </Box>
            <Box>
              <IconButton onClick={() => handleDelete(cart.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CartComponents;
