import { Fragment } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, Button, Typography,  } from "@mui/material";
import React, { useState } from 'react';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location ::::", location);
  const { image, title, price, features } = location?.state?.data;
  const [selectedColor, setSelectedColor] = useState('');
  

  const colors = ['red', 'green', 'blue'];
  
  function handleColorChange(event) {
    setSelectedColor(event.target.value);
  }

  

  function renderColorOptions() {
    return colors.map((color) => (
      <label key={color}>
        <input
          type="radio"
          name="color"
          value={color}
          checked={selectedColor === color}
          onChange={handleColorChange}
        />
        {color}
      </label>
    ));
  }


  return (
    <Fragment>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    
      <Grid container>
        <Grid item xs={4}>
          <Box
            component="img"
            sx={{
              height: 1,
              width: 1,
            }}
            alt="The house from the offer."
            src={image}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h5">Price : {price}</Typography>
          <Box sx ={{my :2}}>
          <Typography>Batter : {features?.battery}</Typography>
          <Typography>Camera : {features?.camera}</Typography>
          <Typography>Display Quality : {features?.display}</Typography>
          <Typography>Processor : {features?.processor}</Typography>
          
          
      <h2>Color</h2>
      <div>{renderColorOptions()}</div>
      
      <button disabled={!selectedColor }></button>
     
          </Box>
        </Grid>
        <Grid>

        </Grid>
      </Grid>
      
    </Fragment>
  );
};

export default ProductDetail;
