import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const CartSummary = ({ id, title, price, amount, singleTotal }) => {
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell align="right">{amount} kg.</TableCell>
      <TableCell align="right">{amount * price}₺</TableCell>
    </TableRow>
  );
};

export default CartSummary;
