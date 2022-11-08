import "./App.css";
import { Typography, styled, Box } from "@mui/material";
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)`
margin: 10px 0;
color: blue;
font-size: 36px;
text-transform: uppercase;
`;
const Component = styled(Box)`
  display:flex;
  background: #fff;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  margin:auto;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

function App() {
  const [transactions, SetTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20 },
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -100 },
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);


  const deleteTransaction = (id) => {
    console.log(id);
    SetTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    SetTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions}/>
          <NewTransaction addTransaction={addTransaction}/>
        </Box>

        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
