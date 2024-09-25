import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/presentation/screens/LoginScreen';
import AdminScreen from './src/presentation/screens/AdminScreen';
import UserScreen from './src/presentation/screens/UserScreen';
import ControlBitacoraScreen from './src/presentation/screens/ControlBitacoraScreen';
import RegistrationScreen from './src/presentation/screens/RegistrationScreen';
import MantenimientoScreen from './src/presentation/screens/MantenimientoScreen';
import RegistrosScreen from './src/presentation/screens/RegistrosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio" component={LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ControlBitacora" component={ControlBitacoraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={RegistrationScreen} />
        <Stack.Screen name="Mantenimiento" component={MantenimientoScreen} />
        <Stack.Screen name="Registros" component={RegistrosScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


