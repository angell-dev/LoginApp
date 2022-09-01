import React from 'react';
import {SafeAreaView} from 'react-native';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
