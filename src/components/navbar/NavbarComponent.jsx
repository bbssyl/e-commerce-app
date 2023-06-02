"use client";
import {
  Alert,
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartComponents from "../product/CartComponents";
import { useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";

const NavbarComponent = () => {
  const router = useRouter();
  const { cartProducts } = useSelector((state) => state.products);
  const [openCartNav, setOpenCartNav] = useState(false);
  const [openAccountNav, setOpenAccountNav] = useState(null);
  const [openMobileNav, setOpenMobileNav] = useState(null);

  const handleCartOpen = () => {
    setOpenCartNav(true);
  };
  const handleCartClose = () => {
    setOpenCartNav(false);
  };

  const renderCartMenu = (
    <Drawer anchor="right" open={openCartNav} onClose={handleCartClose}>
      {cartProducts.length > 0 ? (
        <CartComponents handleCartClose={handleCartClose} />
      ) : (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleCartClose}>
              <ClearIcon />
            </IconButton>
          </Box>
          <Alert variant="standard" color="info">
            <Typography>Sepetinizde ürün bulunmamaktadır.</Typography>
          </Alert>
        </Box>
      )}
    </Drawer>
  );

  const handleAccountOpen = (event) => {
    setOpenAccountNav(event.currentTarget);
  };
  const handleAccountClose = () => {
    setOpenAccountNav(null);
  };
  const renderAccountMenu = (
    <Menu
      anchorEl={openAccountNav}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      open={Boolean(openAccountNav)}
      onClose={handleAccountClose}
      sx={{ my: 5 }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: 200,
          p: 2,
        }}
      >
        <Avatar src="" alt="Profil" />
        <Typography>email</Typography>
        <Typography>profil id</Typography>
      </Box>
      <MenuItem onClick={handleAccountClose}>Hesap Detayı</MenuItem>
      <MenuItem onClick={handleAccountClose}>Siparişlerim</MenuItem>
      <MenuItem onClick={handleAccountClose}>Çıkış</MenuItem>
    </Menu>
  );

  const handleMobileOpen = (event) => {
    setOpenMobileNav(event.currentTarget);
  };
  const handleMobileClose = () => {
    setOpenMobileNav(null);
  };
  const renderMobileMenu = (
    <Menu
      anchorEl={openMobileNav}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMobileNav)}
      onClose={handleMobileClose}
    >
      <MenuItem>Sepetim</MenuItem>
      <MenuItem>Hesap Bilgileri</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" sx={{ boxShadow: 0, bgcolor: "#222935" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <StoreIcon />
            Fake E-Commerce App
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit" onClick={handleCartOpen}>
              <Badge badgeContent={cartProducts.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleAccountOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="inherit" onClick={handleMobileOpen}>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderAccountMenu}
      {renderMobileMenu}
      {renderCartMenu}
    </Box>
  );
};

export default NavbarComponent;