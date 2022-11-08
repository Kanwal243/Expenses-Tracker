import { Box, Divider, List, Typography, styled} from "@mui/material";
import React from "react";
import Transaction from "./Transaction";


const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
`;

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <Component>
      <Typography variant="h5">Transactions History</Typography>
      <Divider />
      <List>
        {transactions.map((transaction) => {
          return (
            <Transaction
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              key={transaction.id}
            />
          );
        })}
      </List>
    </Component >
  );
};

export default Transactions;
