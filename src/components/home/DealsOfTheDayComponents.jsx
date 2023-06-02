"use client";

import { fetchProductCategories } from "@/slices/categorySlice";
import { fetchCategorisedProducts } from "@/slices/productsSlice";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

const sliderSettings = {
  lazyLoad: true,
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 3,
  responsive: [
    {
      breakpoint: 1295,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
      },
    },
    {
      breakpoint: 599,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
      },
    },
  ],
};

const renderBrands = [
  "brand-1.png",
  "brand-2.png",
  "brand-3.png",
  "brand-4.png",
  "brand-5.png",
  "brand-6.png",
];

const DealsOfTheDayComponents = () => {
  const dispatch = useDispatch();
  const { categorisedProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductCategories());
    dispatch(fetchCategorisedProducts("mens-shirts"));
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Box>
        <Slider {...sliderSettings}>
          {categorisedProducts?.map((product) => (
            <Box key={product.id}>
              <Card sx={{ m: 4, p: 2 }}>
                <CardMedia
                  component="img"
                  width={200}
                  height={200}
                  image={product.thumbnail}
                  alt={product.thumbnail}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Rating precision={0.5} value={product.rating} readOnly />
                    <Typography variant="caption">
                      ({product.rating})
                    </Typography>
                  </Box>
                  <Box>
                    <Button variant="outlined" color="secondary" size="small">
                      Add to cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5">Featured Brands</Typography>
        <Grid
          container
          sx={{
            bgcolor: "white",
            p: 4,
            borderRadius: 1,
            filter: "grayscale(100%)",
            my: 2,
            display: "flex",
            gap: 2,
            justifyContent: "space-around",
          }}
        >
          {renderBrands.map((brand) => {
            return (
              <img
                key={brand}
                src={brand}
                alt={brand}
                width={100}
                height={50}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default DealsOfTheDayComponents;
