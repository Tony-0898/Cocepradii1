import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Asegúrate de tener instalado react-native-vector-icons
import { RegistrationScreenStyles as styles } from '../styles/RegistrationStylesScreen';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  // Estado
  const [formValues, setFormValues] = useState({
    nombreCompleto: '',
    usuario: '',
    contraseña: '',
    confirmarContraseña: '',
    identidad: '',
    proyecto: '',
    unidadAsignada: '',
    colorUnidad: '',
    detallesFisicos: '',
    placaUnidad: '',
    fechaCaducidad: new Date(),
    imagenPersonal: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeFecha = (event, selectedDate) => {
    const currentDate = selectedDate || formValues.fechaCaducidad;
    setShowDatePicker(false);
    setFormValues({ ...formValues, fechaCaducidad: currentDate });
  };

  const handleImageResponse = (response) => {
    if (response.didCancel) {
      Alert.alert('Operación cancelada');
    } else if (response.errorMessage) {
      Alert.alert('Error:', response.errorMessage);
    } else if (response.assets) {
      const uri = response.assets[0].uri;
      setFormValues({ ...formValues, imagenPersonal: uri });
    }
  };

  const tomarFoto = () => {
    launchCamera({ mediaType: 'photo', maxWidth: 300, maxHeight: 300, quality: 1 }, handleImageResponse);
  };

  const seleccionarImagen = () => {
    launchImageLibrary({ mediaType: 'photo', maxWidth: 300, maxHeight: 300, quality: 1 }, handleImageResponse);
  };

  const handleRegistro = () => {
    const { nombreCompleto, usuario, contraseña, confirmarContraseña, identidad, proyecto, unidadAsignada, colorUnidad, detallesFisicos, placaUnidad, imagenPersonal } = formValues;

    if (
      !nombreCompleto || !usuario || !contraseña || !confirmarContraseña ||
      !identidad || !proyecto || !unidadAsignada ||
      (unidadAsignada !== 'vehiculo propio' && (!colorUnidad || !detallesFisicos)) ||
      !placaUnidad || !imagenPersonal
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
        {[
          { label: 'Nombre Completo', value: 'nombreCompleto', icon: 'user' },
          { label: 'Cree un nombre de Usuario', value: 'usuario', icon: 'user' },
          { label: 'Identidad', value: 'identidad', icon: 'id-card' },
          { label: 'Proyecto al que pertenece', value: 'proyecto', icon: 'folder' },
        ].map(({ label, value, icon }) => (
          <View key={value}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
              <Icon name={icon} size={20} color="#3d8abe" />
              <TextInput
                style={styles.input}
                placeholder={`Ingrese su ${label.toLowerCase()}`}
                value={formValues[value]}
                onChangeText={(text) => setFormValues({ ...formValues, [value]: text })}
              />
            </View>
          </View>
        ))}

{[
  { label: 'Contraseña', value: 'contraseña', secure: true, icon: 'lock' },
  { label: 'Confirmar Contraseña', value: 'confirmarContraseña', secure: true, icon: 'lock' },
].map(({ label, value, secure, icon }) => (
  <View key={value} style={styles.passwordContainer}>
    <Text style={styles.label} >{label}</Text>
    <View style={styles.inputContainer}>
      <Icon name={icon} size={20} color="#3d8abe" />
      <TextInput
        style={styles.input}
        placeholder={`Ingrese su ${label.toLowerCase()}`}
        value={formValues[value]}
        secureTextEntry={value === 'contraseña' ? !showPassword : !showConfirmPassword}
        onChangeText={(text) => setFormValues({ ...formValues, [value]: text })}
      />
      <TouchableOpacity
        onPress={() => {
          if (value === 'contraseña') {
            setShowPassword(!showPassword);
          } else {
            setShowConfirmPassword(!showConfirmPassword);
          }
        }}
      >
        <Icon
          name={value === 'contraseña' ? (showPassword ? 'eye-slash' : 'eye') : (showConfirmPassword ? 'eye-slash' : 'eye')}
          size={20}
          color="#3d8abe"
        />
      </TouchableOpacity>
    </View>
  </View>
))}



        <Text style={styles.label}>Unidad Asignada</Text>
        <Picker
          selectedValue={formValues.unidadAsignada}
          onValueChange={(itemValue) => setFormValues({ ...formValues, unidadAsignada: itemValue })}
          style={styles.picker}
        >
          <Picker.Item label="Seleccione una unidad" value="" />
          <Picker.Item label="Motocicleta COCEPRADII" value="motocicleta" />
          <Picker.Item label="Vehículo Pickup COCEPRADII" value="vehiculo pickup" />
          <Picker.Item label="Vehículo Propio" value="vehiculo propio" />
        </Picker>

        {(formValues.unidadAsignada === 'motocicleta' || formValues.unidadAsignada === 'vehiculo pickup') && (
          <>
            {[
              { label: 'Color de la Unidad', value: 'colorUnidad', icon: 'paint-brush' },
              { label: 'Detalles Físicos (Posee algún golpe)', value: 'detallesFisicos', icon: 'exclamation-triangle' },
            ].map(({ label, value, icon }) => (
              <View key={value}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputContainer}>
                  <Icon name={icon} size={20} color="#3d8abe" />
                  <TextInput
                    style={styles.input}
                    placeholder={`Ingrese ${label.toLowerCase()}`}
                    value={formValues[value]}
                    onChangeText={(text) => setFormValues({ ...formValues, [value]: text })}
                  />
                </View>
              </View>
            ))}

            <Text style={styles.label}>Fecha de Caducidad de la Revisión</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
              <Text style={styles.dateText}>{formValues.fechaCaducidad.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={formValues.fechaCaducidad}
                mode="date"
                display="default"
                onChange={onChangeFecha}
              />
            )}
          </>
        )}

        {(formValues.unidadAsignada === 'motocicleta' || formValues.unidadAsignada === 'vehiculo pickup' || formValues.unidadAsignada === 'vehiculo propio') && (
          <>
            <Text style={styles.label}>Placa de la Unidad</Text>
            <View style={styles.inputContainer}>
              <Icon name="car" size={20} color="#3d8abe" />
              <TextInput
                style={styles.input}
                placeholder="Ingrese la placa de la unidad"
                value={formValues.placaUnidad}
                onChangeText={(text) => setFormValues({ ...formValues, placaUnidad: text })}
              />
            </View>
          </>
        )}

        <Text style={styles.label}>Imagen Personal</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.imagePickerButton} onPress={seleccionarImagen}>
            <Icon name="image" size={50} color="#fff" />
            <Text style={styles.buttonText}>Seleccionar Imagen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePickerButton} onPress={tomarFoto}>
            <Icon name="camera" size={50} color="#fff" />
            <Text style={styles.buttonText}>Tomar Foto</Text>
          </TouchableOpacity>
        </View>

        {formValues.imagenPersonal && <Image source={{ uri: formValues.imagenPersonal }} style={styles.imagen} />}

        <Button title="Registrar" onPress={handleRegistro} color="#3d8abe" />
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;
