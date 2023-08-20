import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import Loader from "../components/Loader";
import { url } from "../data/Coinsdata";
import { useParams } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import MoreDetails from "../components/MoreDetails";
import Chart from "../components/Chart";

const CoinDetail = () => {
  const [coin, setCoin] = useState({});
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams();

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"];

  const handleSwitchChartStats = (val) => {
    switch (val) {
      case "24h":
        setDays("24h");
        setloading(true);
        break;
      case "7d":
        setDays("7d");
        setloading(true);
        break;
      case "14d":
        setDays("14d");
        setloading(true);
        break;
      case "30d":
        setDays("30d");
        setloading(true);
        break;
      case "60d":
        setDays("60d");
        setloading(true);
        break;
      case "200d":
        setDays("200d");
        setloading(true);
        break;
      case "365d":
        setDays("365d");
        setloading(true);
        break;
      case "max":
        setDays("max");
        setloading(true);
        break;

      default:
        setDays("24h");
        setloading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const { data } = await axios.get(`${url}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${url}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        // console.log(data);
        setCoin(data);
        setChartArray(chartData.prices);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };
    fetchCoinDetails();
  }, [params.id, currency, days]);

  if (error) return <Error message={"Error while fetching the data "} />;

  return (
    <Container maxWidth={"xl"}>
      <Box
        textAlign={"center"}
        letterSpacing={5}
        lineHeight={1.5}
        color={"lightcoral"}
        sx={{
          fontSize: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1.5rem" },
        }}
      >
        Discover {coin.name}
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <Stack
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-around"}
          minHeight={"100vh"}
          sx={{
            flexDirection: {
              lg: "row-reverse",
              md: "row-reverse",
              sm: "column",
              xs: "column",
            },
          }}
        >
          {/* Coins chart */}
          <Box sx={{ width: { lg: "60%", md: "60%", sm: "100%", xs: "100%" } }}>
            {/* Radio Currency */}
            <Stack flexDirection={"row"} justifyContent={"center"} mb={5}>
              <FormControl>
                <FormLabel sx={{ textAlign: "center" }}>
                  {" "}
                  Select Currency
                </FormLabel>
                <RadioGroup
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  row
                >
                  <FormControlLabel
                    value="inr"
                    control={<Radio />}
                    label="INR"
                  />
                  <FormControlLabel
                    value="usd"
                    control={<Radio />}
                    label="USD"
                  />
                  <FormControlLabel
                    value="eur"
                    control={<Radio />}
                    label="Euro"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            {/* Chart */}
            <Chart currency={currencySymbol} array={chartArray} days={days} />

            {/* Time Interval Buttons */}
            <Stack
              flexDirection={"row"}
              flexWrap={"wrap"}
              my={2}
              justifyContent={"center"}
            >
              {btns.map((btn, index) => (
                <Button key={index} onClick={() => handleSwitchChartStats(btn)}>
                  {btn}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Coin Details */}
          <Stack
            sx={{ width: { lg: "20%", md: "20%", sm: "100%", xs: "100%" } }}
          >
            <Badge
              badgeContent={`#${coin.market_cap_rank}`}
              color="secondary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia
                sx={{
                  height: 100,
                }}
                image={coin.image.large}
                title={coin.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {coin.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color={"lightpink"}
                >
                  {currencySymbol} {coin.market_data.current_price[currency]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  Last Updated on{" "}
                  {Date(coin.market_data.last_updated).split("G")[0]}{" "}
                </Typography>
              </CardContent>
              <CardActions>
                {coin.market_data.price_change_percentage_24h < 0 ? (
                  <ArrowDropDown color="error" />
                ) : (
                  <ArrowDropUp color="success" />
                )}
                {coin.market_data.price_change_percentage_24h}%
              </CardActions>
            </Card>
            <Stack>
              <LinearProgress
                variant="determinate"
                value={56}
                sx={{ py: "5px" }}
                // color="secondary"
              />
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                my={1}
              >
                <Badge
                  color="success"
                  badgeContent={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                />
                <Typography variant="p" lineHeight={1.5}>
                  24h Range
                </Typography>
                <Badge
                  color="error"
                  badgeContent={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
                />
              </Stack>
            </Stack>
            {/* More Details */}
            <Box my={1.5}>
              <MoreDetails
                title={"Max Supply"}
                value={coin.market_data.max_supply}
              />
              <MoreDetails
                title={"circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <MoreDetails
                title={"Market Cap"}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <MoreDetails
                title={"All Time low"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
              <MoreDetails
                title={"All Time high"}
                value={`${currencySymbol}${coin.market_data.ath[currency]}`}
              />
            </Box>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default CoinDetail;
