import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button } from 'react-native';

const ControlBitacoraScreen = () => {
  const [form, setForm] = useState({
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: '',
    campo6: '',
    campo7: '',
    campo8: '',
    campo9: '',
    campo10: ''
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Datos del formulario:', form);
    // Aquí podrías realizar alguna acción como enviar los datos a una API o guardarlos en la aplicación
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabecera con la información estática */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Control de Kilometraje de Combustible Mensual</Text>
        <Text>Nombre Conductor: Juan Pérez</Text>
        <Text>Tipo de Vehículo: Camioneta</Text>
        <Text>Placa: ABC-1234</Text>
      </View>

      {/* Formulario con 10 campos de entrada */}
      <View style={styles.formContainer}>
        {Object.keys(form).map((key, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>Campo {index + 1}</Text>
            <TextInput
              style={styles.input}
              value={form[key]}
              onChangeText={(value) => handleChange(key, value)}
              placeholder={`Ingrese valor para el campo ${index + 1}`}
            />
          </View>
        ))}

        {/* Botón para enviar el formulario */}
        <Button title="Enviar" onPress={handleSubmit} color="#0057e7" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ControlBitacoraScreen;
