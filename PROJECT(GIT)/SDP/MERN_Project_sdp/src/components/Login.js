import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

const LoginBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const LoginButton = styled.button`
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

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;

  &:hover {
    text-decoration: none;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');

  useEffect(() => {
    // Generate a random captcha text on component mount
    generateCaptcha();
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value)
  };

  const handlePassword = (event) => {
    setPassword(event.target.value)
  };

  const handleCaptcha = (event) => {
    setEnteredCaptcha(event.target.value)
  };

  const generateCaptcha = () => {
    // Generate a random alphanumeric string of a fixed length (e.g., 6 characters)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captcha);
  };

  const handleSubmit = async (e) => {  
    e.preventDefault();
    if (enteredCaptcha === generatedCaptcha) {
      //navigate('/MainSection');
      //
      try {
        const {response} = await axios.post('http://localhost:5000/api/users/', {
          username: username,
          password: password
        });
        localStorage.setItem("userInfo", JSON.stringify(response));
        alert('Login Succesfully!!!');
        navigate('/MainSection');
      } catch (error) {
        console.log(error);
        alert('An error occurred during login. Please check the entered credentials');
      }//
    } else {
      alert('Incorrect Captcha! Please try again.');
      generateCaptcha();
    }
  };

  useEffect(() => {
    if(localStorage.getItem("userInfo")){
      localStorage.getItem("userInfo");
    }
  })
  

  return (
    <Container>
      <LoginBox>
        <h1>Welcome to BANK OF BHARATH</h1>
        <div className="form-group">
          <label>Username:</label>
          <FormInput type="text" value={username} onChange={handleUsername} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <FormInput type="password" value={password} onChange={handlePassword} />
        </div>
        <div className="form-group">
          {/* Show the generated captcha text */}
          <p>Captcha: {generatedCaptcha}</p>
          {/* User enters the captcha text */}
          <FormInput type="text" onChange={handleCaptcha} />
        </div>
        <div className="form-group">
          <LoginButton onClick={handleSubmit}>Login</LoginButton>
        </div>
        <div className="form-group">
          <p>Don't have an account? Click here to <ToggleButton onClick={() => navigate('/Signup')}>Signup</ToggleButton></p>
        </div>
      </LoginBox>
    </Container>
  );
}

export default Login;
