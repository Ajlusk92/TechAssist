import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutDashboard, MessageSquare, History, Settings } from 'lucide-react-native';

import Dashboard from './src/screens/Dashboard';
import ChatScreen from './src/screens/ChatScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="AI Assistant" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#333' },
          tabBarActiveTintColor: '#007AFF',
          headerStyle: { backgroundColor: '#121212' },
          headerTitleStyle: { color: '#fff' }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Dashboard} 
          options={{ tabBarIcon: ({color}) => <LayoutDashboard color={color} /> }} 
        />
        <Tab.Screen 
          name="Diagnostic" 
          component={ChatStack} 
          options={{ tabBarIcon: ({color}) => <MessageSquare color={color} /> }} 
        />
        <Tab.Screen 
          name="Saved Jobs" 
          component={HistoryScreen} 
          options={{ tabBarIcon: ({color}) => <History color={color} /> }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}