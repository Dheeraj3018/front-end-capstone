import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = ({ cartTotal }) => {
  const navItems = ["Home"];
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#a01010" }}
        component="nav"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
          >
            First Online Store
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "black" }}>
                {item}
              </Button>
            ))}
          </Box>

          <Badge badgeContent={cartTotal} color="secondary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
