import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener instalado react-native-vector-icons
import { RegistrationScreenStyles as styles } from '../styles/RegistrationStylesScreen';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [nombreCompleto, setNombreCompleto] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [identidad, setIdentidad] = useState('');
  const [proyecto, setProyecto] = useState('');
  const [unidadAsignada, setUnidadAsignada] = useState('');
  const [colorUnidad, setColorUnidad] = useState('');
  const [detallesFisicos, setDetallesFisicos] = useState('');
  const [placaUnidad, setPlacaUnidad] = useState('');
  const [fechaCaducidad, setFechaCaducidad] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imagenPersonal, setImagenPersonal] = useState(null);

  const onChangeFecha = (event, selectedDate) => {
    const currentDate = selectedDate || fechaCaducidad;
    setShowDatePicker(false);
    setFechaCaducidad(currentDate);
  };

  const tomarFoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Operación cancelada');
        } else if (response.errorMessage) {
          Alert.alert('Error:', response.errorMessage);
        } else if (response.assets) {
          const uri = response.assets[0].uri;
          setImagenPersonal(uri);
        }
      }
    );
  };

  const seleccionarImagen = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Operación cancelada');
        } else if (response.errorMessage) {
          Alert.alert('Error:', response.errorMessage);
        } else if (response.assets) {
          const uri = response.assets[0].uri;
          setImagenPersonal(uri);
        }
      }
    );
  };

  const handleRegistro = () => {
    if (
      nombreCompleto === '' ||
      usuario === '' ||
      contraseña === '' ||
      confirmarContraseña === '' ||
      identidad === '' ||
      proyecto === '' ||
      unidadAsignada === '' ||
      (unidadAsignada !== 'vehiculo propio' && (colorUnidad === '' || detallesFisicos === '')) ||
      placaUnidad === '' ||
      !imagenPersonal
    ) {
      Alert.alert('Error', 'Por favor, complete todos los campos requeridos.');
    } else if (contraseña !== confirmarContraseña) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
    } else {
      Alert.alert('Registro Exitoso', 'Se ha registrado exitosamente.');
      navigation.navigate('Inicio');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre Completo</Text>
        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={20} color="#3d8abe" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre completo"
            value={nombreCompleto}
            onChangeText={setNombreCompleto}
          />
        </View>

        <Text style={styles.label}>Nombre de Usuario</Text>
        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={20} color="#3d8abe" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre de usuario"
            value={usuario}
            onChangeText={setUsuario}
          />
        </View>

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={20} color="#3d8abe" />
            <TextInput
              style={styles.input}
              placeholder="Ingrese su contraseña"
              value={contraseña}
              secureTextEntry={!showPassword}
              onChangeText={setContraseña}
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={showPassword ? styles.hideButton : styles.showButton}
          >
            <Text style={styles.toggleButtonText}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar Contraseña</Text>
        <View style={styles.passwordContainer}>
          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={20} color="#3d8abe" />
            <TextInput
              style={styles.input}
              placeholder="Confirme su contraseña"
              value={confirmarContraseña}
              secureTextEntry={!showConfirmPassword}
              onChangeText={setConfirmarContraseña}
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={showConfirmPassword ? styles.hideButton : styles.showButton}
          >
            <Text style={styles.toggleButtonText}>{showConfirmPassword ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Identidad</Text>
        <View style={styles.inputContainer}>
          <Icon name="id-card-outline" size={20} color="#3d8abe" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su número de identidad"
            value={identidad}
            onChangeText={setIdentidad}
          />
        </View>

        <Text style={styles.label}>Proyecto al que pertenece</Text>
        <View style={styles.inputContainer}>
          <Icon name="folder-outline" size={20} color="#3d8abe" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre del proyecto al que pertenece"
            value={proyecto}
            onChangeText={setProyecto}
          />
        </View>

        <Text style={styles.label}>Unidad Asignada</Text>
        <Picker
          selectedValue={unidadAsignada}
          onValueChange={(itemValue) => setUnidadAsignada(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Seleccione una unidad" value="" />
          <Picker.Item label="Motocicleta" value="motocicleta" />
          <Picker.Item label="Vehículo Pickup" value="vehiculo pickup" />
          <Picker.Item label="Vehículo Propio" value="vehiculo propio" />
        </Picker>

        {(unidadAsignada === 'motocicleta' || unidadAsignada === 'vehiculo pickup') && (
          <>
            <Text style={styles.label}>Color de la Unidad</Text>
            <View style={styles.inputContainer}>
              <Icon name="color-palette-outline" size={20} color="#3d8abe" />
              <TextInput
                style={styles.input}
                placeholder="Ingrese el color de la unidad"
                value={colorUnidad}
                onChangeText={setColorUnidad}
              />
            </View>

            <Text style={styles.label}>Detalles Físicos (Posee algún golpe)</Text>
            <View style={styles.inputContainer}>
              <Icon name="alert-circle-outline" size={20} color="#3d8abe" />
              <TextInput
                style={styles.input}
                placeholder="Detalles físicos"
                value={detallesFisicos}
                onChangeText={setDetallesFisicos}
              />
            </View>

            <Text style={styles.label}>Fecha de Caducidad de la Revisión</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
              <Text style={styles.dateText}>{fechaCaducidad.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={fechaCaducidad}
                mode="date"
                display="default"
                onChange={onChangeFecha}
              />
            )}
          </>
        )}

        {(unidadAsignada === 'motocicleta' || unidadAsignada === 'vehiculo pickup' || unidadAsignada === 'vehiculo propio') && (
          <>
            <Text style={styles.label}>Placa de la Unidad</Text>
            <View style={styles.inputContainer}>
              <Icon name="car-outline" size={20} color="#3d8abe" />
              <TextInput
                style={styles.input}
                placeholder="Ingrese la placa de la unidad"
                value={placaUnidad}
                onChangeText={setPlacaUnidad}
              />
            </View>
          </>
        )}

        <Text style={styles.label}>Imagen Personal</Text>
        <TouchableOpacity style={styles.imagePickerButton} onPress={seleccionarImagen}>
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imagePickerButton} onPress={tomarFoto}>
          <Text style={styles.buttonText}>Tomar Foto</Text>
        </TouchableOpacity>

        {imagenPersonal && <Image source={{ uri: imagenPersonal }} style={styles.imagen} />}

        <Button title="Registrar" onPress={handleRegistro} color="#0057e7" />
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;
