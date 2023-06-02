"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  Select,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const CategoriesBarComponent = ({ currentShow, handleChange }) => {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categories);

  const handleGetProducts = (url = false) => {
    if (!url) {
      router.push("/products");
    } else {
      router.push(`products/category/${url}`);
    }
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        bgcolor: "white",
        boxShadow: 1,
        borderRadius: 1,
        p: 1,
      }}
    >
      <Box sx={{ flexGrow: 1, display: { xs: "block", lg: "none" } }}>
        <FormControl fullWidth size="small">
          <InputLabel color="secondary">Category</InputLabel>
          <Select
            label="Category"
            variant="outlined"
            color="secondary"
            value={""}
          >
            <MenuItem onClick={() => handleGetProducts()}>
              All Products
            </MenuItem>
            {categories.map((c) => {
              return (
                <MenuItem
                  key={c}
                  value={c}
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => handleGetProducts(c)}
                >
                  {c}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Radio
          checked={currentShow === 4}
          name="show-list"
          value={4}
          onChange={handleChange}
          icon={<ViewModuleOutlinedIcon />}
          checkedIcon={<ViewModuleIcon />}
          color="secondary"
        />
        <Radio
          checked={currentShow === 12}
          name="show-list"
          value={12}
          onChange={handleChange}
          icon={<ViewListOutlinedIcon />}
          checkedIcon={<ViewListIcon />}
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export default CategoriesBarComponent;
