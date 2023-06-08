"use client"

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCartNav } from "@/slices/productsSlice";
const MobileBar = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { openCartNav } = useSelector(state => state.products)
    const [value, setValue] = useState(0)
    const handleChange = (event, newEvent) => {
        setValue(newEvent)
    }
    const handleCartOpen = () => {
        dispatch(setOpenCartNav(true))
    }
    const handleCartClose = () => {
        dispatch(setOpenCartNav(false))
    }
    return (
        <Box sx={{ width: "100%", display: { xs: "block", md: "none" }, position: "fixed", bottom: 0, boxShadow: 2 }}>
            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => router.push("/")} />
                <BottomNavigationAction label="Products" icon={<CategoryIcon />} onClick={() => router.push("/products")} />
                <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} onClick={handleCartOpen} onClose={handleCartClose} />
            </BottomNavigation>
        </Box>
    )
}

export default MobileBar