import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#212529", padding: "40px" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "white", textAlign: "center" }}
      >
       All Your Home Needs at One Place
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "white", textAlign: "center" }}
      >
       
      </Typography>
    </Box>
  );
};

export default Banner;