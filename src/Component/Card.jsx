import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button,  CardActions } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


export default function ShopCard({ data, handleAddToCart, cartitems }) {
  const navigate = useNavigate();
  console.log('data ::::',data)
  const [btn] = useState(true);

  const handleNavigate = () => {
    navigate('/details',
    {
      state : {data}
    })
  }

  return (
    // <Box margin={4}>
      <Card sx={{ maxWidth: 300, minHeight : '650px',height : '100%' }}>
        <CardMedia
          component="img"
          // width="18rem"
          image={data?.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price INR ₹ {data?.price}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {data?.features}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {data?.features?.display}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.features?.battery}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data?.features?.os}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data?.features?.camera}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.features?.about}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ width : '100%', alignItems: "center", display : 'flex', justifyContent:'space-around' }}>
            <Button
              disabled={cartitems.some((obj) => obj.id === data?.id)}
              onClick={() => handleAddToCart(data?.id)}
              variant="contained"
            >
              {btn ? "Add to cart" : "Added to cart"}
            </Button>
            <Button variant="contained" onClick={() => handleNavigate(data)}>View Detail</Button>
          </Box>
        </CardActions>
      </Card>
      // </Box>
  );
}