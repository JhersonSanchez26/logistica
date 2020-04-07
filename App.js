import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import CargaUpload from './Screen/Carga';
import DescargaUpload from './Screen/Descarga';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MiMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Carga" component={CargaUpload} />
      <Tab.Screen name="Descargar" component={DescargaUpload} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MiMenu />
      
    </NavigationContainer>
  );
}
