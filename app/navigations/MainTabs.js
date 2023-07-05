import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from '../screens/Categories';
import Orders from '../screens/Orders';
import images_map from '../resources/images';
import colors from '../resources/colors';
import styles from '../styles/main';

function MainTabs(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.skyblue,
      }}>
      <Tab.Screen
        name="Category"
        component={Categories}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: tabInfo => (
            <Image
              source={images_map['category-icon']}
              style={[
                styles.icon,
                {
                  tintColor: tabInfo.focused
                    ? colors.skyblue
                    : colors['light-gray'],
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Orders}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: tabInfo => (
            <Image
              source={images_map['order-icon']}
              style={[
                styles.icon,
                {
                  tintColor: tabInfo.focused
                    ? colors.skyblue
                    : colors['light-gray'],
                },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
