import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, ImageBackground, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginScreenStyles as styles } from '../styles/LoginScreenStyles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [role, setRole] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const registered = await AsyncStorage.getItem('isRegistered');
        if (registered) {
          setIsRegistered(true);
        }
      } catch (error) {
        console.error('Error al verificar el registro:', error);
      }
    };

    checkRegistration();
  }, []);

  const handleLogin = () => {
    if (usuario === '' || contraseña === '') {
      Alert.alert('ERROR DE CREDENCIALES', 'Por favor ingrese un usuario y contraseña válidos.');
    } else {
      if (role === 'admin' && usuario === 'admin' && contraseña === 'admin') {
        navigation.navigate('Admin');
      } else if (role === 'tecnico' && usuario === 'user' && contraseña === 'user') {
        navigation.navigate('User');
      } else {
        Alert.alert('ERROR ', 'Por favor Ingrese el Usuario y contraseña Asignados');
      }
    }
  };

  const handleTouch = () => {
    Keyboard.dismiss();
    setRole('');
  };

  const formBackgroundColor = role === 'admin'
    ? styles.adminFormContainer
    : role === 'tecnico' ? styles.tecnicoFormContainer : null;

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../pictures/Coce7.jpg')}
          style={styles.background}
        >
          <Image 
            source={require('../pictures/cocepng.png')}
            style={styles.logo}
          />

          {role === '' ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.adminButton, styles.button]}
                onPress={() => setRole('admin')}
              >
                <Text style={styles.buttonText}>Administrador</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tecnicoButton, styles.button]}
                onPress={() => setRole('tecnico')}
              >
                <Text style={styles.buttonText}>Técnico</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[styles.formWrapper, formBackgroundColor]}>
              <View style={styles.formContainer}>
                <Text style={styles.label}>Usuario</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su usuario"
                  placeholderTextColor="#FFF"
                  value={usuario}
                  onChangeText={setUsuario}
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su contraseña"
                  secureTextEntry
                  placeholderTextColor="#FFF"
                  value={contraseña}
                  onChangeText={setContraseña}
                />

                <Button
                  title="Iniciar Sesión"
                  onPress={handleLogin}
                  color="#0057e7"
                  
                />
              </View>
            </View>
          )}

          {/* Mostrar "Registrarme" si el usuario no está registrado */}
          {!isRegistered && (
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.registerText}>Registrarme</Text>
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
