import React, { useEffect, useState } from "react";
import {
  Stack,
  Container,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
  RadioGroup,
} from "@mui/material";
import axios from "axios";
import { url } from "../data/Coinsdata";
import ClipLoader from "react-spinners/ClipLoader";
import Typewriter from "typewriter-effect";
import Error from "../components/Error";
import Loader from "../components/Loader";

const CoinExchange = () => {
  const [exCoins, setExcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoinsExchange = async () => {
      try {
        const { data } = await axios.get(`${url}/exchanges`);
        setExcoins(data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };
    fetchCoinsExchange();
  }, []);
  const loader = (
    <Stack
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      my={-20}
    >
      <ClipLoader loading={loading} />
    </Stack>
  );

  if (error) return <Error message={"Error while fetching the data "} />;

  return (
    <Container maxWidth={"xl"}>
      {/* Heading */}

      <Box
        textAlign={"center"}
        mb={5}
        letterSpacing={5}
        lineHeight={1.5}
        color={"lightcoral"}
        sx={{
          fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1.5rem" },
        }}
      >
        Discover the Ultimate Coin Exchange
        <Typewriter
          options={{
            strings: [
              "Seamlessly Trade",
              "Securely Transact",
              "Elevate Your Portfolio",
            ],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </Box>

      {/* Cards with loading  */}
      {loading ? (
        <Loader />
      ) : (
        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={10}
          justifyContent={"center"}
        >
          {/* Dynamic Data accessing */}
          {exCoins.map((coin, index) => (
            // Card
            <Card
              key={index}
              sx={{
                width: 345,
                cursor: "pointer",
                transition: "0.5s",
                ":hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardHeader
                avatar={<Avatar src={coin.image} />}
                title={coin.name}
              />
              <CardContent>
                <Typography letterSpacing={1.1} lineHeight={1.8}>
                  <strong style={{ color: "lightsalmon" }}>
                    {coin.country}
                  </strong>
                </Typography>
                <Typography letterSpacing={1.1} lineHeight={1.8}>
                  Year of Establishment:{" "}
                  {coin.year_established
                    ? coin.year_established
                    : "Not Avalaible"}
                </Typography>
                <Typography letterSpacing={1.1} lineHeight={1.8}>
                  Trust Score: {coin.trust_score}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton href={coin.url} target="_blank">
                  Visit
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default CoinExchange;
