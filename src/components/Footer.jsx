import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { YouTube, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box minHeight={"20vh"} p={2} bgcolor={"#f9f8f8"}>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
          <Typography textAlign={"center"} variant="h3" letterSpacing={5} p={2}>
            Coin<span style={{ color: "lightcoral" }}>Era</span>
          </Typography>
          <Stack justifyContent={"center"} flexDirection={"row"}>
            <Button
              href="https://www.youtube.com/@ReactLearnerWeb"
              target="_blank"
            >
              <YouTube sx={{ color: "lightcoral" }} />
            </Button>
            <Button
              href="https://www.linkedin.com/in/kamal-joshi-a43738249/"
              target="_blank"
            >
              <LinkedIn sx={{ color: "lightcoral" }} />
            </Button>
            <Button
              href="https://github.com/KamalJoshi-web?tab=repositories"
              target="_blank"
            >
              <GitHub sx={{ color: "lightcoral" }} />
            </Button>
          </Stack>
        </Box>
        <Box sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
          <Typography textAlign={"center"} variant="h3" letterSpacing={5} p={2}>
            About Us
          </Typography>
          <Typography variant="p" letterSpacing={1.5} textAlign={"center"}>
            Your all-in-one solution for navigating the dynamic world of
            cryptocurrencies. From real-time market data to secure exchanges, we
            empower your crypto journey.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
