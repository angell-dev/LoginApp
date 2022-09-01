import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Container, Title, LabelError} from './styles';

type FormProps = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormProps>();

  // removed after implement logged area
  const onSubmit = (data: FormProps) => console.log(data);

  return (
    <Container>
      <Title>Welcome</Title>
      <Controller
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            message: 'E-mail inválido',
            value: /^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i,
          },
        }}
        control={control}
        render={({field: {value, onChange}}) => (
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="E-mail"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <LabelError>{errors.email?.message}</LabelError>}

      <Controller
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: 6,
        }}
        control={control}
        render={({field: {value, onChange}}) => (
          <Input
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <LabelError>{errors.password?.message}</LabelError>}

      <Button onPress={handleSubmit(onSubmit)}>LOGIN</Button>
    </Container>
  );
};

export default SignIn;
