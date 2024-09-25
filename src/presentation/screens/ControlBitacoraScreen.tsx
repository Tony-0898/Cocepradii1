import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar la biblioteca de iconos

const ControlBitacoraScreen = () => {
  const [form, setForm] = useState({
    fecha: new Date(),
    nombreConductor: 'Juan Pérez',
    numeroFactura: '',
    kilometrajeSalida: '',
    cantidadCombustible: '',
    valorPagado: '',
    kilometrajeLlegada: '',
    lugarSalida: '',
    destino: '',
    proposito: '',
    nombreProyecto: 'Caminos a la resiliencia'
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.fecha;
    setShowDatePicker(false);
    setForm({ ...form, fecha: currentDate });
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
        <Text>Nombre Conductor: {form.nombreConductor}</Text>
        <Text>Tipo de Vehículo: Camioneta</Text>
        <Text>Placa: ABC-1234</Text>
      </View>

      {/* Formulario con los campos de entrada */}
      <View style={styles.formContainer}>
        {/* Campo para la fecha */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            <Icon name="calendar" size={20} color="#3d8abe" /> Fecha
          </Text>
          <Button title="Seleccionar Fecha" onPress={() => setShowDatePicker(true)} color="#58aadc" />
          {showDatePicker && (
            <DateTimePicker
              value={form.fecha}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        {/** Campos de entrada adicionales **/}
        {[
          { label: 'Número de Factura', key: 'numeroFactura', placeholder: 'Ingrese número de factura', icon: 'file' },
          { label: 'Kilometraje de Salida', key: 'kilometrajeSalida', placeholder: 'Ingrese kilometraje de salida', keyboardType: 'numeric', icon: 'tachometer' },
          { label: 'Cantidad de Combustible (Litros)', key: 'cantidadCombustible', placeholder: 'Ingrese cantidad de combustible', keyboardType: 'numeric', icon: 'tint' },
          { label: 'Valor Pagado por Litros', key: 'valorPagado', placeholder: 'Ingrese valor pagado', keyboardType: 'numeric', icon: 'money' },
          { label: 'Kilometraje de Llegada', key: 'kilometrajeLlegada', placeholder: 'Ingrese kilometraje de llegada', keyboardType: 'numeric', icon: 'road' },
          { label: 'Lugar y Hora de Salida', key: 'lugarSalida', placeholder: 'Ingrese lugar y hora de salida', icon: 'map-marker' },
          { label: 'Destino y Hora de Llegada', key: 'destino', placeholder: 'Ingrese destino y hora de llegada', icon: 'flag' },
          { label: 'Propósito', key: 'proposito', placeholder: 'Ingrese propósito', icon: 'clipboard' },
          { label: 'Nombre del Proyecto', key: 'nombreProyecto', placeholder: 'Ingrese nombre del proyecto', icon: 'book' }
        ].map((input, index) => (
          <View style={styles.inputGroup} key={index}>
            <Text style={styles.label}>
              <Icon name={input.icon} size={20} color="#3d8abe" /> {input.label}
            </Text>
            <TextInput
              style={styles.input}
              value={form[input.key]}
              onChangeText={(value) => handleChange(input.key, value)}
              placeholder={input.placeholder}
              keyboardType={input.keyboardType || 'default'}
            />
          </View>
        ))}

        {/* Botón para enviar el formulario */}
        <Button title="Enviar" onPress={handleSubmit} color="#3d8abe" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#bed5e7', // Fondo de la pantalla
  },
  header: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3d8abe', // Título en color primario
  },
  formContainer: {
    padding: 10,
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 30, // Aumenta la separación entre los campos
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#3d8abe', // Etiquetas en color primario
    flexDirection: 'row', // Asegúrate de que los iconos y texto estén alineados
    alignItems: 'center', // Centra verticalmente el texto con el icono
  },
  input: {
    height: 40,
    borderColor: '#3d8abe', // Borde de los campos de entrada en color primario
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ControlBitacoraScreen;
