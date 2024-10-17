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
  headerImage: {
    width: 200,  // Ajusta el tamaño de la imagen aquí
    height: 200, // Ajusta la altura de la imagen aquí
    resizeMode: 'contain',
    marginBottom: -50,
    marginTop:-40,
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d8abe',
    textAlign: 'center',
    marginBottom: 20,
  },
  headerContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
    // También puedes ajustar el margen superior aquí para mover el contenedor entero
    // marginTop: -20, // Descomentar para mover el contenedor más arriba
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
    width: 150, // Ajustar el ancho de las columnas de la tabla
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cellText: {
    flex: 1,
    padding: 10,
    textAlign: 'center',  
    color: '#555',
    minWidth: 100,
    flexShrink: 1,
  },
  horizontalScroll: {
    marginBottom: 20, // Espacio debajo del scroll horizontal
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
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});
