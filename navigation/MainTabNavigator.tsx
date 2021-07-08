
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { Fontisto } from '@expo/vector-icons';
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].text,
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].indicatorColor
        },
        style: {
          backgroundColor: Colors[colorScheme].tint
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: true,


      }}>
      <MainTab.Screen
        name="Camera"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={20} color={color} />,
          tabBarLabel: () => null,
        }}


      />
      <MainTab.Screen
        name="Chats"
        component={TabOneNavigator}

      />
      <MainTab.Screen
        name="Status"
        component={TabTwoNavigator}

      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoNavigator}

      />
    </MainTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
