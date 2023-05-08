import React, { useCallback,  } from "react";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { Box, Button, Card,  Typography } from "@mui/material";
import { displayRazorpay } from "../payment.config";



function CartItem(props) {
    const handlePayNow = useCallback((price) => ()=>{
      displayRazorpay(price);
    },[])
  return (
    <Box marginTop={1} >
      
      <Card>
      <Box padding={1} >
        <Typography variant="h5">
          {props.data.title}{" "}
          <HighlightOffSharpIcon
            sx={{ color: "red" }}
            onClick={() => props.handleRemoveCart(props.data.id)}
          />
        </Typography>
        <Typography variant="h6"> Rs. {props.data.price}</Typography>
        <Button variant="contained" onClick={handlePayNow(props.data.price)}>Pay Now</Button>
        </Box>
         </Card>
         
    </Box>
  );
}

export default CartItem;