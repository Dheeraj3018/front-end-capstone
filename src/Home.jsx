import NavBar from './Component/NavBar';
import Banner from './Component/Banner';
import ShopCard from './Component/Card';
import CartItem from './Component/CardItem';
import Footer from './Component/Footer';
import Courosel from './Component/Courosel/Courosel'
import { useState } from 'react';
import {Box,Card,Grid,Typography,CssBaseline} from "@mui/material";


function Home() {

  const products = [
    {
      id: 1,
      title: " Motorola G62 5G (8GB, 128GB) (Midnight Gray)",
      price: "₹18,602",
      features: { processor: "Snapdragon 8 Gen 1 (4nm) 5G Processor",
      display: "Amoled",
      battery:
        " 5000MAh",
      os: " Android 13.0",
      camera: " 50MP Dual camera",
           
       
        
      },
      image:
"https://www.reliancedigital.in/medias/Motorola-G82-Mobile-Phone-492850555-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODIxMnxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaGVmLzk4NDE2NzA3ODMwMDYuanBnfGM5OWMyZTkxZGZkYzA2NWI3NWJiMTE1NDBkNWY4ZTMyOGJkNDhjMjcxMDkxYTE0Y2Q0NTBmMzk4NmMxYWVlN2Y",    },
    {
      id: 2,
      title: "Apple iPhone 14 Pro ",
      price: 129900,
      features: {
        processor: "A15 Bionic (5nm) 5G Processor",
        display: "6.1inch Super Retina XDR OLED, 120Hz Display",
        battery:
          "3450mAh battery, 23W Fast Charging, MagSafe Wireless Charging",
        os: "iOS 15",
        camera: "Triple Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/Apple-iPhone-13-Pro-Smartphones-491997733-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNDIxNDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDg0L2g5Mi85NjM3MjYwNDI3Mjk0LmpwZ3wyYzE3ZjI1YTI4ZmJlZWRkODZkMjA3MDZlZTk5N2I2OTYwMTNjZWYzZjZhNjcyZTJmNDAxYTQwYTVjNWFkY2M1",
    },
    {
      id: 3,
      title: "OnePlus 10 Pro 12GB/256GB",
      price: 71999,
      features: {
        processor: "Snapdragon 8 Gen 1 (4nm) 5G Processor",
        display: "6.7inch Fluid AMOLED, 120Hz Display",
        battery: "5000mAh battery, 80W Fast Charging, Fast Wireless Charging",
        os: "Android 12",
        camera: "Triple Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/OnePlus-10-Pro-Smartphones-492849811-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNDM2MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY0L2hkNS85ODA4MzQ2Mjg0MDYyLmpwZ3xmNjIwM2UxMWJiODg3OGU4YjMxYjA2ZDUyZDdmNGJjZWY2MWYyMzU4YjI5YjYzNjMwZTRiYjM0NWIyNjNhODYx",
    },
    {
      id: 4,
      title: "Xiaomi 12 Pro 12GB/256GB",
      price: 67499,
      features: {
        processor: "Snapdragon 8 Gen 1 (4nm) 5G Processor",
        display: "6.73inch AMOLED, 120Hz Display",
        battery:
          "4600mAh battery, 120W Fast Charging, Reverse Wireless Charging",
        os: "Android 12",
        camera: "Quad Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/Xiaomi-12-PRO-Mobile-Phone-492850156-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0Mjg5MnxpbWFnZS9qcGVnfGltYWdlcy9oMjQvaDMyLzk4MjQyMzc3ODEwMjIuanBnfDA2Mjg0ODA3Zjc4MjJhZTk1YjkyZWJmYjRlYjdkNmJjNjAzNjY3YWU1ZWQyMTA2ZTU0ZDc1MmQ0MGY5MzA4YjM",
    },
    {
      id: 5,
      title: "Motorola Edge 30 Pro 8GB/128GB",
      price: 49999,
      features: {
        processor: "Snapdragon 8 Gen 1 (4nm) 5G Processor",
        display: "6.7inch OLED, 144Hz Display",
        battery: "4800mAh battery, 68W Fast Charging, Fast Wireless Charging",
        os: "Android 12",
        camera: "Triple Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/Motorola-Edge-30-Pro-Smart-Phones-492849740-i-12-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyOTMwNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hlYS85ODE0MDcxMDgzMDM4LmpwZ3wwNjBkNmJhNWYzNWJiMjQ1OTU1ZWY0NTMxYjYxNjJmYWU5MmUxNTM1OTc3NDgyNmEyNDI0ZWYzMWJjODZiY2Uz",
    },
    {
      id: 6,
      title: "Realme GT 2 Pro 12GB/256GB",
      price: 57999,
      features: {
        processor: "Snapdragon 8 Gen 1 (4nm) 5G Processor",
        display: "6.7inch AMOLED, 120Hz Display",
        battery: "5000mAh battery, 65W Fast Charging",
        os: "Android 12",
        camera: "Triple Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/Realme-GT2Pro-Mobile-Phone-492849956-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTA3MXxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaDA3Lzk4Mzg1MDM1NTkxOTguanBnfDg2NGNiZDhjYTgzYTc2ODM2OTZmYTVhMzlmNWRlNjZjOTUyYTI2MmE1MTRkYjU5ODA0YWM0MWQzNmJhMWM5Mjk",
    },
    {
      id: 7,
      title: "OPPO Reno 7 12GB/256GB",
      price: 39999,
      features: {
        processor: "Mediatek Dimensity 900 (6nm) 5G Processor",
        display: "6.43inch AMOLED, 90Hz Display",
        battery: "4500mAh battery, 65W Fast Charging, Reverse Charging",
        os: "Android 11",
        camera: "Triple Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/OPPO-Reno7-Pro-5G-Smartphone-492575102-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NzkzN3xpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGU2Lzk3Njk3NTY4ODUwMjIuanBnfDNiYzBkZjM4N2FiM2IyMGRiYjBmODk1OGY4N2Y5YTBiMzA2MTBiMTM2MzNiZmI4Y2QyNGNmZDNmYTNkYzFkZmM",
    },
    {
      id: 8,
      title: "VIVO X80 Pro 12GB/256GB",
      price: 79999,
      features: {
        processor: "Snapdragon 8 Gen 1 (4nm) 5G Processor",
        display: "6.78inch AMOLED, 120Hz Display",
        battery: "4700mAh battery, 80W Fast Charging, Fast Wireless Charging",
        os: "Android 12",
        camera: "Quad Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/Vivo-X80-Pro-Smartphone-492850418-i-7-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MDUzMjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDM5L2hjMC85ODMyNTk0NjA0MDYyLmpwZ3xmMTRiZTcwMmVkZmIyNDM3Nzg2NTY4YTA3NDM5N2ZlMjhlM2FiZGUxZGQ2MGE4MWYyODFiZTlmZmMwOTc1NjU3",
    },
    {
      id: 9,
      title: "Nokia XR20 6GB/128GB",
      price: 46999,
      features: {
        processor: "Snapdragon 480 (8nm) 5G Processor",
        display: "6.67inch IPS LCD, 60Hz Display",
        battery: "4630mAh battery, 18W Fast Charging, Fast Wireless Charging",
        os: "Android 11",
        camera: "Dual Back Camera with OIS and Front Camera with EIS",
      },
      image:
        "https://www.reliancedigital.in/medias/Nokia-XR20-Smartphones-491998781-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDE2Mjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2gwNC85NjU5NzA3ODgzNTUwLmpwZ3xkMjQ0OGEzMmJjNGI4MWExZTNlZDFkN2UxMzcyYzMyZDFhMDk1YThiYzQ5NzRjMGRhYzM4ZjcxMWY1ZmI1NGYy",
    },
  ];
  const [cartitems, setCartItem] = useState([]);
  console.log('cartitems :::',cartitems)
  const [total, setTotal] = useState(0);

  let handleAddToCart = (id) => {
    const productIndex = products?.findIndex((obj) => obj.id === id);
    const product = products[productIndex];
    setCartItem([...cartitems, product]);
    setTotal(total + product.price);
  };

  let handleRemoveCart = (id) => {
    const cartItemsIndex = cartitems?.findIndex((obj) => obj.id === id);
    setTotal(total - cartitems[cartItemsIndex].price);
    cartitems.splice(cartItemsIndex, 1);
    setCartItem([...cartitems]);
  };
  return (
    <Box>
      <CssBaseline />
      <NavBar cartTotal={cartitems?.length} />
      <Courosel navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
            bottom: '0',
            top: 'unset'
        }
    }} />
      <Banner />
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {/* <Box
            display={"flex"}
            spacing={{ xs: 1, sm: 2 }}
            margin={4}
            flexWrap={"wrap"}
          > */}
          <Grid container spacing={3}>
            {products && products?.length > 0 && products?.map((product, index) => (
              <Grid item xs={4} key={index}>
              <ShopCard
              key={index}
              data={product}
              handleAddToCart={handleAddToCart}
              cartitems={cartitems}
              />
              </Grid>
              ))}
              </Grid>
          {/* </Box> */}
        </Grid>
        <Grid item xs={3}>
          <Box marginTop={3}>
            <Typography variant="h4">CART</Typography>
            {cartitems && cartitems?.length > 0 && cartitems?.map((item) => {
              return (
                <>
                  <CartItem data={item} handleRemoveCart={handleRemoveCart} />
                </>
              );
            })}
            <Box marginTop={2}>             
            <Card>
            <Typography textAlign={"center"} variant="h4">Total : {total}</Typography>
            </Card>
            </Box>

          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  );
}

export default Home;