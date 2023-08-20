import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Details from "../assets/details.jpg";
import Analyse from "../assets/analyse.jpg";
import Buy from "../assets/buy.jpg";
import Trade from "../assets/trade.jpg";
import Exchange from "../assets/exchange.jpg";

const Home = () => {
  const carouselItems = [
    { img: Details, text: "Get all coins details" },
    { img: Analyse, text: "Track Coin Info" },
    { img: Buy, text: "Buy Coins" },
    { img: Trade, text: "Get Best Deals" },
    { img: Exchange, text: "Get best exchange rates" },
  ];

  return (
    <Box>
      {/* Site Detail */}
      <Box bgcolor={"#f9f8f8"}>
        <Typography textAlign={"center"} variant="h3" letterSpacing={5} p={2}>
          Welcome To Coin<span style={{ color: "lightcoral" }}>Era</span>
        </Typography>
      </Box>
      {/* Carousel Box */}
      <Box>
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          centerMode
          transitionTime={2000}
        >
          {carouselItems.map((item, index) => (
            <Box key={index}>
              <img
                src={item.img}
                style={{
                  width: "100%",
                  height: "85vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "white",
                  padding: "1rem",
                  width: "fir-content",
                  borderRadius: "15px",
                  textTransform: "capitalize",
                  opacity: "50%",
                  fontSize: { lg: "5rem", md: "4rem", sm: "3rem", xs: "2rem" },
                }}
              >
                {" "}
                {item.text}{" "}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Home;
