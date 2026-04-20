import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialMediaLogin = ({ platform, onLogin }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await axios.post('http://localhost:5000/gain_followers', { platform, email, password });
      onLogin(platform, email, password);
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <Container>
      <h1>{platform} Login</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password:
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default SocialMediaLogin;
