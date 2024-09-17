// src/App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'; // Importar pantalla de inicio de sesión
// Importar otras pantallas

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Pantalla de inicio de sesión */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Opcional: Oculta el encabezado
        />
        {/* Otras pantallas se pueden agregar aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

