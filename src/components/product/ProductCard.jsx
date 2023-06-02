"use client";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Rating,
  Skeleton,
  Snackbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/productsSlice";
import { useState } from "react";

const ProductCard = ({ product, currentShow }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    open: false,
    info: "success",
    message: "",
  });
  const handleClick = (id) => {
    router.push(`product/${id}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setState({
      open: true,
      info: "success",
      message: "Ürün başarıyla sepete eklendi.",
    });
  };

  const handleClose = () => {
    setState({ open: false });
  };

  if (currentShow === 4) {
    return (
      <>
        <Card key={product.id} sx={{ height: "100%" }}>
          <CardContent
            onClick={() => {
              handleClick(product.id);
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <CardMedia
              component="img"
              src={product.thumbnail}
              alt={product.thumbnail}
              height={345}
              loading="lazy"
            />
            <Box>
              <CardHeader subheader={product.title} sx={{ width: "100%" }} />
              <Chip
                label={product.brand}
                sx={{ textTransform: "capitalize" }}
              />
            </Box>
            <Typography variant="body2">{product.description}</Typography>
            <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
              {product.discountPercentage > 0 ? (
                <>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body"
                      sx={{
                        textDecorationLine: "line-through",
                        fontStyle: "italic",
                      }}
                      color="gray"
                    >
                      ${product.price}
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
                      {product.discountPercentage}%
                    </Typography>
                  </Box>
                  {(() => {
                    const result =
                      product.price -
                      (product.price * product.discountPercentage) / 100;
                    return (
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        ${result.toFixed(2)}
                      </Typography>
                    );
                  })()}
                </>
              ) : (
                <Typography variant="h6">${product.price}</Typography>
              )}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="caption" sx={{ my: 0.5 }}>
                  ({product.rating})
                </Typography>
                <Rating
                  defaultValue={0}
                  precision={0.5}
                  value={product.rating}
                  readOnly
                />
              </Box>
            </Box>
          </CardContent>
          <CardContent>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <IconButton onClick={() => handleAddToCart(product)}>
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Snackbar
          open={state.open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert
            severity={state.info}
            sx={{ width: "100%" }}
            onClose={handleClose}
          >
            {state.message}
          </Alert>
        </Snackbar>
      </>
    );
  } else {
    return (
      <Card key={product.id}>
        <CardContent
          onClick={() => {
            handleClick(product.id);
          }}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 3,
            cursor: "pointer",
          }}
        >
          <CardMedia
            component="img"
            src={product.thumbnail}
            alt={product.thumbnail}
            sx={{ width: { xs: 100, md: 250 } }}
            height={250}
            loading="lazy"
          />
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Box>
              <CardHeader subheader={product.title} sx={{ width: "100%" }} />
              <Chip
                label={product.brand}
                sx={{ textTransform: "capitalize" }}
              />
            </Box>
            {product.discountPercentage > 0 ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body"
                    sx={{
                      textDecorationLine: "line-through",
                      fontStyle: "italic",
                    }}
                    color="gray"
                  >
                    ${product.price}
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
                    {product.discountPercentage}%
                  </Typography>
                </Box>
                {(() => {
                  const result =
                    product.price -
                    (product.price * product.discountPercentage) / 100;
                  return (
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      ${result.toFixed(2)}
                    </Typography>
                  );
                })()}
              </>
            ) : (
              <Typography variant="h6">${product.price}</Typography>
            )}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="caption" sx={{ my: 0.5 }}>
                ({product.rating})
              </Typography>
              <Rating
                defaultValue={0}
                precision={0.5}
                value={product.rating}
                readOnly
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <IconButton>
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
};

export default ProductCard;
