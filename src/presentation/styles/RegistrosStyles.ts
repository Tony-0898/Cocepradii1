// src/presentation/styles/RegistrosStyles.ts
import { StyleSheet } from 'react-native';

export const RegistrosStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  background: {
    flex: 1,
    backgroundColor: '#bed5e7', // Fondo de pantalla
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 14,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3d8abe',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  tableContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#e1e1e1',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    width: 150,  // Cambia 'flex' por 'width' para asegurar un ancho fijo
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  cellText: {
    width: 150,  // Asegura que las celdas tengan el mismo ancho que los encabezados
    padding: 10,
    textAlign: 'center',
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cellText: {
    flex: 1,
    padding: 10,
    textAlign: 'center',    // Centramos el texto en las celdas
    color: '#555',
    minWidth: 100,          // Ajuste mínimo de ancho de las celdas
    flexShrink: 1,          // Permite que las celdas se ajusten según el contenido
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});
