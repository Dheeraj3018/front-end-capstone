import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#212529", padding: "40px" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "white", textAlign: "center" }}
      >
         © 2023 Renalmojo
      </Typography>
    </Box>
  );
};

export default Footer;