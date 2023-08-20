import React, { useState } from "react";
import {
  Box,
  Button,
  Fab,
  SwipeableDrawer,
  Typography,
  Stack,
} from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClose = (e) => {
    setOpenDrawer(false);
  };
  //LinkStylings
  const LinkStyling = {
    letterSpacing: "2px",
    textTransform: "capitalize",
  };
  return (
    <Box>
      <Fab
        color="warning"
        size="small"
        sx={{ boxShadow: "none", position: "fixed", top: "10px", left: "10px" }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuOpen sx={{ fontSize: { lg: "1rem" } }} />
      </Fab>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={handleClose}
      >
        <Typography variant="h3" letterSpacing={5} p={2}>
          Coin<span style={{ color: "lightcoral" }}>Era</span>
        </Typography>
        <Stack p={2} gap={3}>
          <Button
            LinkComponent={Link}
            to="/"
            onClick={handleClose}
            sx={LinkStyling}
          >
            Home
          </Button>
          <Button
            LinkComponent={Link}
            to="/coins"
            onClick={handleClose}
            sx={LinkStyling}
          >
            Coins
          </Button>
          <Button
            LinkComponent={Link}
            to="/coinexchange"
            onClick={handleClose}
            sx={LinkStyling}
          >
            Coin Exchange
          </Button>
        </Stack>
        {/* <Stack position={"absolute"} bottom={50} left={20}></Stack> */}
      </SwipeableDrawer>
    </Box>
  );
};

export default Header;
