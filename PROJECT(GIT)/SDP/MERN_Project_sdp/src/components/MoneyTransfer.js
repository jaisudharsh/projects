import React, { useState } from 'react';
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

const TransferBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 600px;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const TransferButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const MoneyTransfer = () => {
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState(0);

    const handleTransfer = async () => {
        try {
            // Write code to send the transaction details to the server for processing
            const transferDetails = {
                sender: sender,
                receiver: receiver,
                amount: amount
            };

            // Make an API call to process the money transfer
            const response = await axios.post('http://localhost:5000/api/transfer', transferDetails);

            // Optionally, handle the response as needed (e.g., show success/failure message)
            console.log('Transfer Successful:', response.data);
        } catch (error) {
            console.error('Error during transfer:', error);
            // Handle error condition (e.g., display error message to the user)
        }
    }

    return (
        <Container>
            <TransferBox>
                <h1>Money Transfer</h1>
                <div className="form-group">
                    <label>Sender:</label>
                    <FormInput type="text" value={sender} onChange={(e) => setSender(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Receiver:</label>
                    <FormInput type="text" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Amount:</label>
                    <FormInput type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="form-group">
                    <TransferButton onClick={handleTransfer}>Transfer</TransferButton>
                </div>
            </TransferBox>
        </Container>
    );
}

export default MoneyTransfer;
