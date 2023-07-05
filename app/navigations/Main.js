import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabs from './MainTabs';
import Pages from './Pages';

//
function Main(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen name="Pages" component={Pages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
