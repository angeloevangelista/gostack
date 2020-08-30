import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Homer"
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#FFF',
          }}
        >
          <Stack.Screen
            name="Home"
            component={Main}
            options={Main.navigationOptions}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={User.navigationOptions}
          />
          <Stack.Screen
            name="Repository"
            component={Repository}
            options={Repository.navigationOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
