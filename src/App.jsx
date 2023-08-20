import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Home from "./pages/Home";
import Header from "./components/Header";
import CoinsDetail from "./pages/CoinDetail";
import CoinExchange from "./pages/CoinExchange";
import Coins from "./pages/Coins";
import Error from "./components/Error";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <Box>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coinexchange" element={<CoinExchange />} />
          <Route path="/coindetail/:id" element={<CoinsDetail />} />
          <Route
            path="*"
            element={
              <Error
                message={"Error 404 page does not exist"}
                setShowFooter={setShowFooter}
              />
            }
          />
        </Routes>
        {showFooter && <Footer />}
      </Router>
    </Box>
  );
};

export default App;
