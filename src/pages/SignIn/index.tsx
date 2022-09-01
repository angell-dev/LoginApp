import React, {useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Container, Title} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Remove after integration
  const onSubmit = () => {
    console.log('Email :', email);
    console.log('Password :', password);
  };

  return (
    <Container>
      <Title>Welcome</Title>
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={onSubmit}>LOGIN</Button>
    </Container>
  );
};

export default SignIn;
