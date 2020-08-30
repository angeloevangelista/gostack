import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={Home.navigationOptions || {}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={Cart.navigationOptions || {}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
