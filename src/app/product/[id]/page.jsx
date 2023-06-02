"use client";
import { fetchSingleProduct } from "@/api";
import {
  Box,
  Button,
  Chip,
  Container,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SpecificProductPage = ({ params }) => {
  const dispatch = useDispatch();
  // const { singleProducts } = useSelector((state) => state.products);
  const [singleProducts, setSingleProducts] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSingleProduct(params.id);
      setSingleProducts(data);
      setCurrentImage(data.thumbnail);
    };
    fetchData();
  }, [params.id]);
  const handleChangeImage = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      {singleProducts ? (
        <Container
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          maxWidth="xl"
        >
          <Box sx={{ flexGrow: 1, boxShadow: 1, p: 2, borderRadius: 2 }}>
            <Grid
              container
              sx={{ display: "flex", gap: 4, justifyContent: "center" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 300, md: 600 },
                    height: { xs: 300, md: 500 },
                  }}
                >
                  <img
                    src={currentImage}
                    alt={currentImage}
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    width: { xs: 300, sm: 400, md: 600 },
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {singleProducts.images?.map((img) => {
                    return (
                      <Box
                        key={img}
                        sx={{
                          borderRadius: 1,
                          border: ".1rem solid #00ccff3b",
                          p: 1,
                          cursor: "pointer",
                          transition: ".5s all ease-in-out",
                          ":hover": {
                            transform: "scale(0.9)",
                          },
                        }}
                        onClick={() => handleChangeImage(img)}
                      >
                        <img
                          src={img}
                          alt={img}
                          width={75}
                          height={75}
                          loading="lazy"
                        />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {singleProducts.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Chip
                      label={singleProducts.brand}
                      sx={{ textTransform: "capitalize" }}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Rating
                    value={singleProducts.rating}
                    precision={0.5}
                    defaultValue={singleProducts.rating}
                  />
                  <Typography variant="caption">
                    ({singleProducts.rating})
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ textTransform: "capitalize" }}
                >
                  Category: {singleProducts.category}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button variant="outlined" color="secondary">
                    Option 1
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Option 2
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Option 3
                  </Button>
                </Box>
                <Box>
                  {singleProducts.discountPercentage > 0 ? (
                    <>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontStyle: "italic",
                            color: "gray",
                            textDecorationLine: "line-through",
                          }}
                        >
                          ${singleProducts.price}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            backgroundColor: "#00a33632",
                            color: "#00a336",
                            px: 1,
                            borderRadius: 2,
                            fontWeight: 700,
                          }}
                        >
                          {singleProducts.discountPercentage}%
                        </Typography>
                      </Box>
                      {(() => {
                        const result =
                          singleProducts.price -
                          (singleProducts.price *
                            singleProducts.discountPercentage) /
                            100;
                        return (
                          <Typography variant="h6" color="green">
                            ${result.toFixed(2)}
                          </Typography>
                        );
                      })()}
                    </>
                  ) : (
                    <Typography variant="body1">
                      ${singleProducts.price}
                    </Typography>
                  )}
                  <Typography variant="body1">
                    {singleProducts.stock
                      ? "Stock Avaible"
                      : "Not stock in store"}
                  </Typography>
                </Box>
                <Box>
                  <Button variant="contained" color="secondary">
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box sx={{ p: 2, boxShadow: 1, borderRadius: 2 }}>
            <Typography variant="caption">
              Description: {singleProducts.description}
            </Typography>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box sx={{ p: 2, m: 4 }}>
            <Grid container sx={{ display: "flex", gap: 2 }}>
              <Grid xs={12} md={5}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 500 },
                  }}
                />
              </Grid>
              <Grid xs={12} md={5}>
                <Skeleton variant="text" height={50} animation="wave" />
                <Skeleton
                  variant="text"
                  height={20}
                  width={100}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  height={20}
                  width={150}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  height={20}
                  width={150}
                  animation="wave"
                />
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Skeleton
                    variant="text"
                    height={50}
                    animation="wave"
                    width={150}
                  />
                  <Skeleton
                    variant="text"
                    height={50}
                    animation="wave"
                    width={150}
                  />
                  <Skeleton
                    variant="text"
                    height={50}
                    animation="wave"
                    width={150}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
};

export default SpecificProductPage;
