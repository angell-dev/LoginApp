import React from 'react';
import {StyledInput} from './styles';
import {TextInputProps} from 'react-native';

const Input = (props: TextInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
