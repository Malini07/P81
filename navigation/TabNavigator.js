import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigation} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator(); 
const BottomTabNavigator = () => {
  return (
  <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreateStory') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
  export default BottomTabNavigator
