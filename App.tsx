import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/presentation/screens/LoginScreen';
import AdminScreen from './src/presentation/screens/AdminScreen';
import UserScreen from './src/presentation/screens/UserScreen';
import ControlBitacoraScreen from './src/presentation/screens/ControlBitacoraScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio" component={LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="ControlBitacora" component={ControlBitacoraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


