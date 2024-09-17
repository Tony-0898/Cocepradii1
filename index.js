/**
 * @format
 */
import 'react-native-gesture-handler'; // Debe ser importado antes de cualquier otro import
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
