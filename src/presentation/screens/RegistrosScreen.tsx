import React, { useState } from 'react';
import { View, Text, Button, Alert, Modal, ActivityIndicator, ScrollView } from 'react-native';
import { RegistrosStyles as styles } from '../styles/RegistrosStyles';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import XLSX from 'xlsx'; // Paquete para generar archivos Excel

// Datos de prueba para la tabla
const mockData = Array.from({ length: 35 }, (_, rowIndex) => 
  Array.from({ length: 11 }, (_, colIndex) => `Dato ${rowIndex + 1}-${colIndex + 1}`)
);

const userProfile = {
  name: 'Juan Pérez',
  project: 'Caminos a la Resiliencia',
  vehiclePlate: 'ABC-1234',
  vehicleType: 'Camioneta',
  additionalInfo: 'Información Adicional',
};

const RegistrosScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filePath, setFilePath] = useState('');

  const createDocument = async () => {
    setIsLoading(true);
    const documentName = 'Liquidacion.xlsx';
    const path = `${RNFS.DocumentDirectoryPath}/${documentName}`;

    try {
      // Crear un libro y una hoja de cálculo
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([
        ['Piloto', 'Numero de Factura', 'Kilometraje de Salida', 'Cantidad de Combustible (Litros)', 'Valor pagado de litros', 'Kilometraje de Llegada', 'Lugar y Hora de Salida', 'Destino y Hora de Llegada', 'Proposito', 'Nombre del Proyecto', 'Fecha'],
        ...mockData
      ]);

      XLSX.utils.book_append_sheet(wb, ws, 'Liquidaciones');

      // Escribir el archivo como base64 para guardarlo en el sistema de archivos
      const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });

      await RNFS.writeFile(path, wbout, 'base64'); // Guardar como base64

      setFilePath(path);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo crear el documento.');
    } finally {
      setIsLoading(false);
    }
  };

  const shareFile = () => {
    Share.open({
      title: 'Enviar Liquidación',
      url: `file://${filePath}`,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // MIME de archivo Excel
    })
    .then(() => {
      setModalVisible(false);
      setFilePath(''); // Limpiar el archivo después de compartir
    })
    .catch((err) => console.log(err));
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {/* Información del usuario */}
        <View style={styles.headerContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.userName}>{userProfile.name}</Text>
            <Text style={styles.userInfo}>Proyecto: {userProfile.project}</Text>
            <Text style={styles.userInfo}>Placa: {userProfile.vehiclePlate}</Text>
            <Text style={styles.userInfo}>Tipo de Vehículo: {userProfile.vehicleType}</Text>
            <Text style={styles.userInfo}>{userProfile.additionalInfo}</Text>
          </View>
        </View>

        {/* Tabla de datos */}
        <ScrollView style={styles.tableContainer}>
          <View style={styles.header}>
            {['Piloto', 'Factura', 'Kilometraje Salida', 'Litros', 'Valor Litros', 'Kilometraje Llegada', 'Lugar/Hora Salida', 'Destino/Hora Llegada', 'Proposito', 'Proyecto', 'Fecha'].map((headerText) => (
              <Text key={headerText} style={styles.headerText}>{headerText}</Text>
            ))}
          </View>
          {mockData.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cellText, cellIndex) => (
                <Text key={cellIndex} style={styles.cellText}>{cellText}</Text>
              ))}
            </View>
          ))}
        </ScrollView>

        {/* Botón para crear el documento */}
        <Button
          title="Enviar Liquidación"
          onPress={createDocument}
          color="#3d8abe"
        />

        {/* Modal de confirmación */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Documento Creado</Text>
              <Text style={styles.modalMessage}>El documento se ha creado exitosamente.</Text>
              <Button title="Compartir" onPress={shareFile} />
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        {/* Barra de progreso */}
        {isLoading && <ActivityIndicator size="large" color="#3d8abe" />}
      </View>
    </View>
  );
};

export default RegistrosScreen;
