import React from 'react';
import { View, Button, ImageBackground, StyleSheet, Alert } from 'react-native';

const AdminScreen = () => {

  // Acción del botón "Asignar Vehículo"
  const handleAsignarVehiculo = () => {
    Alert.alert('Asignar Vehículo', 'Vehículo asignado correctamente');
  };

  // Acción del botón "Configurar Usuario"
  const handleConfigurarUsuario = () => {
    Alert.alert('Configurar Usuario', 'Configuración del usuario abierta');
  };

  // Acción del botón "Realizar acción"
  const handleAdminAction = () => {
    alert('Acción del Administrador');
  };

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <ImageBackground
        source={require('../pictures/fondoTonos.jpg')}  // Imagen de fondo local
        style={styles.background}
      >
        {/* Botón para realizar una acción de administrador */}
        <Button
          title="Realizar acción"
          onPress={handleAdminAction}  // Llama a la función handleAdminAction
          color="#58aadc"  // Azul brillante
        />

        {/* Botón para Asignar Vehículo */}
        <View style={styles.buttonContainer}>
          <Button
            title="Asignar Vehículo"
            onPress={handleAsignarVehiculo}  // Llama a la función handleAsignarVehiculo
            color="#3d8abe"  // Azul oscuro
          />
        </View>

        {/* Botón para Configurar Usuario */}
        <View style={styles.buttonContainer}>
          <Button
            title="Configurar Usuario"
            onPress={handleConfigurarUsuario}  // Llama a la función handleConfigurarUsuario
            color="#bed5e7"  // Azul claro
          />
        </View>

      </ImageBackground>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,  // Espacio entre los botones
  },
});

