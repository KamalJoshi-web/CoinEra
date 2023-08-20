import React from "react";
import { Stack } from "@mui/material";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <Stack
      height={"90vh"}
      justifyContent={"center"}
      alignItems={"center"}
      my={-20}
    >
      <ClipLoader />
    </Stack>
  );
};

export default Loader;
