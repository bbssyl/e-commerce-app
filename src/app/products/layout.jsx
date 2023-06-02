"use client";
import CategoryMenuComponents from "@/components/categories/CategoryMenuComponents";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ProductPageLayout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid sx={{ display: { xs: "none", lg: "grid" } }} lg={3}>
          <CategoryMenuComponents />
        </Grid>
        <Grid xs={12} md={12} lg={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPageLayout;
