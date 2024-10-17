import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; // Importa las funciones para cámara y galería

const MantenimientoScreen = () => {
  const [descripcion, setDescripcion] = useState(''); // Estado para la descripción del problema
  const [imageUri, setImageUri] = useState(null); // Estado para la imagen seleccionada

  const form = {
    nombreConductor: 'Juan Pérez',
  };

  const handleReporte = () => {
    Alert.alert("Reporte enviado", "Tu reporte de mantenimiento ha sido enviado con éxito.");
  };

  // Función para tomar una foto
  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        setImageUri(response.assets[0].uri); // Guarda la imagen seleccionada
      }
    });
  };

  // Función para seleccionar una imagen de la galería
  const handleSelectFromGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        setImageUri(response.assets[0].uri); // Guarda la imagen seleccionada
      }
    });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Cabecera con la información estática */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Control de Kilometraje de Combustible Mensual</Text>
          <Text>Nombre Conductor: {form.nombreConductor}</Text>
          <Text>Tipo de Vehículo: Camioneta</Text>
          <Text>Placa: ABC-1234</Text>
        </View>
        
        <Text style={styles.title}>Mantenimiento</Text>

        {/* Campos de información del activo */}
        <Text style={styles.label}>Descripción del Problema:</Text>
        <TextInput 
          style={styles.textArea} 
          placeholder="Describe el problema o el mantenimiento requerido" 
          multiline
          onChangeText={(text) => setDescripcion(text)} // Actualiza el estado con la descripción
        />

        {/* Mostrar la imagen tomada o seleccionada */}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}

        {/* Botones para capturar imágenes */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.iconButton, { backgroundColor: descripcion ? '#3d8abe' : '#ccc' }]} 
            onPress={handleTakePhoto}
            disabled={!descripcion} // Deshabilita el botón si no hay descripción
          >
            <Icon name="camera" size={30} color="#fff" />
            <Text style={styles.buttonText}>Tomar Foto</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.iconButton, { backgroundColor: descripcion ? '#3d8abe' : '#ccc' }]} 
            onPress={handleSelectFromGallery}
            disabled={!descripcion} // Deshabilita el botón si no hay descripción
          >
            <Icon name="images" size={30} color="#fff" />
            <Text style={styles.buttonText}>Galería</Text>
          </TouchableOpacity>
        </View>

        {/* Botón para enviar reporte */}
        <TouchableOpacity style={styles.submitButton} onPress={handleReporte}>
          <Text style={styles.submitButtonText}>Enviar Reporte de Mantenimiento</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#bed5e7',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e8f4fa',
    borderRadius: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3d8abe',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3d8abe',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  // Centra y distribuye los botones de manera uniforme
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: 120,
  },
  buttonText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: '#3d8abe',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default MantenimientoScreen;
