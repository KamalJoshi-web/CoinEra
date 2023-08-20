import React, { useEffect, useState } from "react";
import {
  Stack,
  Container,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Box,
  Pagination,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import { url } from "../data/Coinsdata";
import Typewriter from "typewriter-effect";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const handlePage = (e, page) => {
    setPage(page);
    setloading(true);
  };

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const { data } = await axios.get(
          `${url}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };
    fetchAllCoins();
  }, [currency, page]);

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
        Your Gateway to Informed Coin Purchases
        <Typewriter
          options={{
            strings: ["Analyze", "Invest", "Prosper"],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>

      <Stack flexDirection={"row"} justifyContent={"center"} mb={5}>
        <FormControl>
          <FormLabel sx={{ textAlign: "center" }}> Select Currency</FormLabel>
          <RadioGroup
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            row
          >
            <FormControlLabel value="inr" control={<Radio />} label="INR" />
            <FormControlLabel value="usd" control={<Radio />} label="USD" />
            <FormControlLabel value="eur" control={<Radio />} label="Euro" />
          </RadioGroup>
        </FormControl>
      </Stack>
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
          {coins.map((coin, index) => (
            // Card
            <Card
              key={index}
              sx={{
                width: 220,
                cursor: "pointer",
                transition: "0.5s",
                ":hover": {
                  transform: "scale(1.1)",
                },
                textDecoration: "none",
              }}
              component={Link}
              to={`/coindetail/${coin.id}`}
            >
              <CardHeader
                avatar={<Avatar src={coin.image} />}
                title={coin.name}
                subheader={coin.symbol}
              />
              <CardContent>
                <Typography
                  letterSpacing={1.1}
                  lineHeight={1.8}
                  sx={{ color: "lightsalmon", fontSize: "1.2rem" }}
                >
                  {coin.current_price
                    ? `${currencySymbol} ${coin.current_price}`
                    : "Not Avalaible"}
                </Typography>
                <Typography letterSpacing={1.1} lineHeight={1.8}>
                  Rank:{" "}
                  {coin.market_cap_rank
                    ? coin.market_cap_rank
                    : "Not Avalaible"}
                </Typography>
                <Typography letterSpacing={1.1} lineHeight={1.8}>
                  Market Cap:{" "}
                  {coin.current_price
                    ? `${currencySymbol}${coin.market_cap}`
                    : "Not Avalaible"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginY={5}
      >
        <Pagination
          count={99}
          color="primary"
          page={page}
          onChange={handlePage}
        />
      </Stack>
    </Container>
  );
};

export default Coins;
