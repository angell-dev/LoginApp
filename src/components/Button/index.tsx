import React from 'react';
import {ButtonText, Container} from './styles';

type Props = {
  children: string;
  onPress: () => void;
};

const Button = ({children, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
