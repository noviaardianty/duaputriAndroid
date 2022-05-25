import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen, SCScreen, SuplierScreen, DatabarangScreen } from './src/screen';
import homescreen from './src/screen/home/home.screen';
import DatalaporantransaksiScreen from './src/screen/datalaporantransaksi/datalaporantransaksi.screen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName='splashscreen'>
      <Stack.Screen
        name='loginscreen'
        component={LoginScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#0d2821'
          },
          title: 'Toko Baju Dua Putri',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#cf9c49',
          },
          // headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name='splashscreen'
        options={{
          headerShown: false
        }}
        component={SCScreen}
      />
      <Stack.Screen
        name='homescreen'
        component={homescreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="datalaporanpenjualan" component={DatalaporantransaksiScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

