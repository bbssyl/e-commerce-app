"use client";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SavingsIcon from "@mui/icons-material/Savings";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const initialValue = [
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Fast Delivery",
    desc: "Start from $10",
  },
  {
    icon: <SavingsIcon fontSize="large" />,
    title: "Money Guarantee",
    desc: "7 Days Back",
  },
  {
    icon: <ShutterSpeedIcon fontSize="large" />,
    title: "365 Days",
    desc: "For free return",
  },
  {
    icon: <CreditScoreIcon fontSize="large" />,
    title: "Payment",
    desc: "Secure System",
  },
];

const InformationPaymentComponent = () => {
  return (
    <Box sx={{ bgcolor: "white", m: 4, p: 2, borderRadius: 2 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "flex-start", md: "space-evenly" },
          gap: 2,
        }}
      >
        {initialValue.map((value) => {
          return (
            <Box
              key={value.title}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              {value.icon}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {value.title}
                </Typography>
                <Typography variant="subtitle2" color="gray">
                  {value.desc}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default InformationPaymentComponent;
