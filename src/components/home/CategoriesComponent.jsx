"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useRouter } from "next/navigation";

const initialValue = [
  {
    icon: "categories-1.png",
    title: "Furniture",
    url: "#",
  },
  {
    icon: "categories-3.png",
    title: "Motocycle",
    url: "#",
  },
  {
    icon: "categories-4.png",
    title: "Car",
    url: "#",
  },
  {
    icon: "categories-5.png",
    title: "Computer",
    url: "#",
  },
  {
    icon: "categories-6.png",
    title: "Phone",
    url: "#",
  },
  {
    icon: "categories-7.png",
    title: "Parfume",
    url: "#",
  },
  {
    icon: "categories-8.png",
    title: "Browse All",
    url: "/products",
  },
];

const CategoriesComponent = () => {
  const router = useRouter();
  return (
    <Box sx={{ m: 4 }}>
      <Grid
        container
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "space-around",
        }}
      >
        {initialValue.map((value) => {
          return (
            <Card
              key={value.title}
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: "center",
                width: { xs: "100%", md: 150 },
                fontWeight: 600,
              }}
            >
              {/* <Link
                sx={{ textDecoration: "none", color: "GrayText" }}
                href={value.url}
              > */}
              <CardActionArea
                sx={{
                  p: 2,
                }}
                onClick={() => router.push(value.url)}
              >
                <CardMedia
                  component="img"
                  height={75}
                  image={value.icon}
                  alt={value.icon}
                  loading="lazy"
                  sx={{
                    transition: "200ms all ease-in-out",
                    ":hover": {
                      transform: "scale(0.8)",
                    },
                  }}
                />
                <CardContent>{value.title}</CardContent>
              </CardActionArea>
              {/* </Link> */}
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategoriesComponent;
