import React from "react";
import { Alert, Stack } from "@mui/material";

const Error = ({ message, setShowFooter }) => {
  setShowFooter(false);
  return (
    <Stack minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Alert severity="error" sx={{ fontSize: "4rem" }}>
        {message}
      </Alert>
    </Stack>
  );
};

export default Error;
