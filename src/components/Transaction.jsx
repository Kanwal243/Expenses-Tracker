import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const List  = styled(ListItem)`
  display: flex;
  marginTop: 10px;
  border: 1px solid #F6F6F6;
`;
const Transaction = ({ transaction,deleteTransaction }) => {
  
  const sign = transaction.amount >= 0 ? 'Rs' : '-Rs';
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount >= 0 ? 'Green' : 'Red';

  return (
    <List  style={{ background: `${color}`, color: "#fff" }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{amount}</ListItemText>
    </List>
  );
};

export default Transaction;
