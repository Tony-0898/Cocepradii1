import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ImageBackground, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importamos el hook de navegación
import { LoginScreenStyles as styles } from '../styles/LoginScreenStyles';  // Importamos los estilos

const LoginScreen = () => {
  const navigation = useNavigation();  // Hook para navegación
  const [usuario, setUsuario] = useState('');  // Estado para usuario
  const [contraseña, setContraseña] = useState('');  // Estado para contraseña
  const [role, setRole] = useState(''); // Estado para el rol seleccionado ('admin' o 'tecnico')

  // Credenciales predefinidas para administrador y técnico
  const credenciales = {
    admin: {
      usuario: 'admin',
      contraseña: 'admin',
    },
    tecnico: {
      usuario: 'user',
      contraseña: 'user',
    },
  };

  // Función para manejar la autenticación
  const handleLogin = () => {
    if (usuario === '' || contraseña === '') {
      Alert.alert('ERROR DE CREDENCIALES', 'Por favor ingrese un usuario y contraseña válidos.');
    } else {
      // Verificar credenciales según el rol seleccionado
      if (role === 'admin' && usuario === credenciales.admin.usuario && contraseña === credenciales.admin.contraseña) {
        navigation.navigate('Admin');  // Navega a la pantalla de administrador
      } else if (role === 'tecnico' && usuario === credenciales.tecnico.usuario && contraseña === credenciales.tecnico.contraseña) {
        navigation.navigate('User');  // Navega a la pantalla de técnico (usuario)
      } else {
        Alert.alert('ERROR ', 'Por favor Ingrese el Usuario y contraseña Asignados');
      }
    }
  };

  // Función para manejar el toque fuera del formulario
  const handleTouch = () => {
    Keyboard.dismiss();  // Oculta el teclado si está visible
    setRole('');  // Oculta el formulario
  };

  // Estilo condicional del formulario basado en el rol
  const formBackgroundColor = role === 'admin' 
    ? styles.adminFormContainer 
    : role === 'tecnico' ? styles.tecnicoFormContainer : null;

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.container}>
        {/* Imagen de fondo animada */}
        <ImageBackground
          source={require('../pictures/Pexel2.jpg')}  // Imagen animada local
          style={styles.background}
        >

          {/* Imagen del logo */}
          <Image 
            source={require('../pictures/cocepng.png')} // Imagen del logo local
            style={styles.logo}
          />

          {/* Elección del rol */}
          {role === '' ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.adminButton, styles.button]}
                onPress={() => setRole('admin')}  // Selecciona el rol de administrador
              >
                <Text style={styles.buttonText}>Administrador</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tecnicoButton, styles.button]}
                onPress={() => setRole('tecnico')}  // Selecciona el rol de técnico
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
                  onChangeText={setUsuario}  // Almacenamos el texto del input
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su contraseña"
                  secureTextEntry
                  placeholderTextColor="#FFF"
                  value={contraseña}
                  onChangeText={setContraseña}  // Almacenamos el texto del input
                />

                {/* Botón para iniciar sesión */}
                <Button
                  title="Iniciar Sesión"
                  onPress={handleLogin}  // Llama a la función handleLogin
                  color="#0057e7" // Azul eléctrico
                />
              </View>
            </View>
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

