import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const MoreDetails = ({ title, value }) => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Typography
        letterSpacing={1.5}
        textTransform={"uppercase"}
        lineHeight={2}
      >
        {title}
      </Typography>
      <Typography color={"lightsalmon"} lineHeight={2}>
        {value}
      </Typography>
    </Stack>
  );
};

export default MoreDetails;
