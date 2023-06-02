"use client";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategories } from "@/slices/categorySlice";
const CategoryMenuComponents = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const handleGetProducts = (url = false) => {
    if (!url) {
      router.push(`products`);
    } else {
      router.push(`products/category/${url}`);
    }
  };

  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);

  return (
    <Box sx={{ p: 2, mx: 2, boxShadow: 1, bgcolor: "white" }}>
      <Typography variant="caption" sx={{ fontWeight: 700 }}>
        Categories
      </Typography>
      <List>
        <ListItem>
          <ListItemButton onClick={() => handleGetProducts()}>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="All Products"></ListItemText>
          </ListItemButton>
        </ListItem>
        {categories.map((c) => {
          return (
            <ListItem key={c}>
              <ListItemButton onClick={() => handleGetProducts(c)}>
                <ListItemIcon>
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={c}
                  sx={{ textTransform: "capitalize" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default CategoryMenuComponents;
