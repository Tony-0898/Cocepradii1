// src/presentation/screens/UserScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../pictures/Pexel3.jpg')}
      style={styles.background}
    >
      {/* Sección de información del usuario */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../pictures/fondoTonos.jpg')}  // Imagen del usuario
          style={styles.userPhoto}
        />
        <Text style={styles.userName}>Nombre del Usuario</Text>
        <Text style={styles.userInfo}>Proyecto: Proyecto Ejemplo</Text>
        <Text style={styles.userInfo}>Otro Dato: Información Adicional</Text>
      </View>

      {/* Sección de botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('ControlBitacora')}
        >
          <Text style={styles.buttonText}>Control de Bitácora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            // Lógica para navegación
          }}
        >
          <Text style={styles.buttonText}>Realizar Reporte de Mantenimiento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            // Lógica para navegación
          }}
        >
          <Text style={styles.buttonText}>Enviar Consolidación</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfo: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  buttonWrapper: {
    width: '80%',
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#0057e7',
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default UserScreen;


