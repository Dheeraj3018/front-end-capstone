import { Paper } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "240px" }}
      />
    </Paper>
  );
}

export default Item;
