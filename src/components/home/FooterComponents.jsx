"use client";

import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const FooterComponents = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "#222935",
        p: 4,
        mt: 4,
        color: "background.default",
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mb: 3
      }}
    >
      <Grid xs={12} md={2}>
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <StoreIcon fontSize="large" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Fake E-Commerce App
            </Typography>
          </Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla,
            molestiae assumenda natus aliquam magnam temporibus quis rem?
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              href="/"
              sx={{
                textDecoration: "none",
                display: "flex",
                gap: 1,
                alignItems: "center",
                p: 1,
                bgcolor: "background.default",
                borderRadius: 1,
                transition: "200ms all ease-in-out",
                ":hover": {
                  transform: "scale(0.9)",
                  boxShadow: 1,
                },
              }}
            >
              <img src="google.png" alt="google.png" width={25} height={25} />
              Google
            </Link>
            <Link
              href="/"
              sx={{
                textDecoration: "none",
                display: "flex",
                gap: 1,
                alignItems: "center",
                p: 1,
                bgcolor: "background.default",
                borderRadius: 1,
                transition: "200ms all ease-in-out",
                ":hover": {
                  transform: "scale(0.9)",
                  boxShadow: 1,
                },
              }}
            >
              <img
                src="appstore.png"
                alt="appstore.png"
                width={25}
                height={25}
              />
              AppStore
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} md={2}>
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          About Us
        </Typography>
        <List dense={true} sx={{ color: "GrayText" }}>
          <ListItem>
            <ListItemText>Careers</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Our Stores</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Our Cares</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Terms & Conditions</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Privacy Policy</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid xs={12} md={2}>
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          Customer Care
        </Typography>
        <List
          dense={true}
          sx={{
            color: "GrayText",
          }}
        >
          <ListItem>
            <ListItemText>Help Center</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>How to Buy</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Track Your Order</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Corporate & Bulk Purchasing</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Return & Refunds</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid xs={12} md={2}>
        <Typography variant="button" sx={{ fontWeight: 700 }}>
          Contact Us
        </Typography>
        <List dense={true} sx={{ color: "GrayText" }}>
          <ListItem>
            <ListItemText>
              Truva Atı, Cevat Paşa, Kayserili Ahmet Paşa Cd. 24/2, 17100
              Çanakkale Merkez/Çanakkale, Turkey
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Email:example@example.com</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Phone:+90(123) 456 7890</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default FooterComponents;
