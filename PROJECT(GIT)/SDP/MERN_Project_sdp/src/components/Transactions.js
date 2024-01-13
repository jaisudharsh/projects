import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TransactionsBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 600px;
  text-align: center;
`;

const TransactionItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchUserTransactions = async () => {
            try {
                // Fetch transactions for the logged-in user
                const response = await axios.get('http://localhost:5000/api/transactions/:username');
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching user transactions:', error);
            }
        };

        fetchUserTransactions();
    }, []);

    return (
        <Container>
            <TransactionsBox>
                <h1>Transactions</h1>
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id}>
                        <p>Transaction ID: {transaction.id}</p>
                        <p>Amount: {transaction.amount}</p>
                        <p>Type: {transaction.Type}</p>
                    </TransactionItem>
                ))}
            </TransactionsBox>
        </Container>
    );
}

export default Transactions;