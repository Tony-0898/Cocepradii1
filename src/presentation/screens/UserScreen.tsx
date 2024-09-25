import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();

  // Datos de prueba para el perfil del usuario
  const userProfile = {
    name: 'Juan Pérez',
    project: 'Caminos a la Resiliencia',
    vehiclePlate: 'ABC-1234',  // Placa del vehículo
    vehicleType: 'Camioneta',    // Tipo de vehículo
    additionalInfo: 'Información Adicional',
  };

  return (
    <ImageBackground
      source={require('../pictures/Coce8.jpg')}
      style={styles.background}
    >
      {/* Sección de información del usuario con fondo semitransparente */}
      <View style={styles.headerContainer}>
        <View style={styles.infoBox}>
          <Image
            source={require('../pictures/fondoTonos.jpg')}  // Imagen del usuario
            style={styles.userPhoto}
          />
          <Text style={styles.userName}>{userProfile.name}</Text>
          <Text style={styles.userInfo}>Proyecto: {userProfile.project}</Text>
          <Text style={styles.userInfo}>Placa: {userProfile.vehiclePlate}</Text>
          <Text style={styles.userInfo}>Tipo de Vehículo: {userProfile.vehicleType}</Text>
          <Text style={styles.userInfo}>{userProfile.additionalInfo}</Text>
        </View>
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
          onPress={() => navigation.navigate('Mantenimiento')}  // Navegación a MantenimientoScreen
        >
          <Text style={styles.buttonText}>Realizar Reporte de Mantenimiento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('Registros')}
        >
          <Text style={styles.buttonText}> Ver Registros </Text>
        </TouchableOpacity >
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
  infoBox: {
    backgroundColor: 'rgba(189, 213, 231, 0.9)', // Fondo con color semitransparente (#bed5e7)
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
    color: '#3d8abe', // Color del nombre
  },
  userInfo: {
    fontSize: 16,
    color: '#58aadc', // Color de la información
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
    backgroundColor: '#3d8abe', // Color de fondo de los botones
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
