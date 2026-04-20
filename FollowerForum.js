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

const FollowerForm = ({ platform, email, password, onFollowersGained }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const numFollowers = event.target.numFollowers.value;

    try {
      await axios.post('http://localhost:5000/gain_followers', { platform, email, password, numFollowers });
      onFollowersGained(platform, numFollowers);
    } catch (error) {
      alert('Failed to gain followers!');
    }
  };

  return (
    <Container>
      <h1>Gain Followers on {platform}</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Number of Followers:
          <Input type="number" name="numFollowers" required />
        </Label>
        <Button type="submit">Gain Followers</Button>
      </Form>
    </Container>
  );
};

export default FollowerForm;
