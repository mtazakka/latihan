import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/index'
import { SafeAreaView, Text } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <Text>
        Haai
      </Text>
      <NavigationContainer>
        {/* <Router /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
