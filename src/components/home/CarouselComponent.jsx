import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "react-slick";

const images = [
  {
    label: "1",
    imgPath: "carousel-1.png",
    desc1: "LIFESTYLE COLLECTION",
    desc2: "MEN & WOMEN",
    desc3: "SALE UP TO",
    desc4: "%30 OFF",
    desc5: "Get Free Shipping on orders over $99.00",
  },
  {
    label: "2",
    imgPath: "carousel-2.png",
    desc1: "TECHNOLOGIES",
    desc2: "PHONE, COMPUTER",
    desc3: "SALE UP TO",
    desc4: "%15 OFF",
    desc5: "Get Free Shipping on orders over $99.00",
  },
  {
    label: "3",
    imgPath: "carousel-3.png",
    desc1: "FASHION",
    desc2: "PARFUME",
    desc3: "SALE UP TO",
    desc4: "%20 OFF",
    desc5: "Get Free Shipping on orders over $99.00",
  },
];

const renderSliderSettings = {
  lazyLoad: true,
  dots: true,
  speed: 500,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  customPaging: () => (
    <Box>
      <Box
        sx={{
          mt: 1,
          bgcolor: "indigo",
          color: "indigo",
          width: "10px",
          height: "10px",
          borderRadius: 4,
          transition: "300ms all ease-in-out",
          ":hover": {
            transform: "scale(1.3)",
          },
        }}
      ></Box>
    </Box>
  ),
};

const CarouselComponents = () => {
  return (
    <Box
      sx={{
        p: { xs: 0, md: 4 },
        m: { xs: 2, md: 4 },
        flexGrow: 1,
        bgcolor: "white",
        borderRadius: 2,
      }}
    >
      <Slider {...renderSliderSettings}>
        {images.map((img) => (
          <div key={img.label}>
            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "space-evenly" }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  maxWidth: 700,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 400 }}>
                  {img.desc1}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900 }}>
                  {img.desc2}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    {img.desc3}
                  </Typography>
                  <Typography
                    variant="h3"
                    color="darkred"
                    sx={{ fontWeight: 600 }}
                  >
                    {img.desc4}
                  </Typography>
                </Box>
                <Typography variant="overline" sx={{ fontSize: 16 }}>
                  {img.desc5}
                </Typography>
                <Box zIndex={40}>
                  <Button color="secondary" variant="contained">
                    Shop now
                  </Button>
                </Box>
              </Box>
              <Box
                component="img"
                sx={{
                  height: 500,
                  width: { xs: "100%", md: 500 },
                  borderRadius: { xs: 0, md: 2 },
                  display: "block",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
                src={img.imgPath}
                alt={img.imgPath}
              />
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  position: "absolute",
                  inset: 0,
                  color: "white",
                  backgroundColor: "#00000073",
                  flexDirection: "column",
                  gap: 2,
                  p: { xs: 2, sm: 2, md: 0 },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 400 }}>
                  {img.desc1}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900 }}>
                  {img.desc2}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Typography variant="h5" sx={{ fontWeight: 400 }}>
                    {img.desc3}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="darkred"
                    sx={{ fontWeight: 600 }}
                  >
                    {img.desc4}
                  </Typography>
                </Box>
                <Typography variant="overline" sx={{ fontSize: 16 }}>
                  {img.desc5}
                </Typography>
                <Box zIndex={40}>
                  <Button color="secondary" variant="contained">
                    Shop now
                  </Button>
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponents;
