import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../screens/Products';
import Location from '../screens/Location';

function Pages(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={({route}) => ({title: route.params.productTitle})}
      />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}

export default Pages;
