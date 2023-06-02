"use client";

import CarouselComponents from "@/components/home/CarouselComponent";
import CategoriesComponent from "@/components/home/CategoriesComponent";
import DealsOfTheDayComponents from "@/components/home/DealsOfTheDayComponents";
import InformationPaymentComponent from "@/components/home/InformationPaymentComponent";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl">
        <CarouselComponents />
        <InformationPaymentComponent />
        <CategoriesComponent />
        <DealsOfTheDayComponents />
      </Container>
    </Box>
  );
}
