export const RegistrationScreenStyles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#3d8abe', // Color del texto de la etiqueta
  },
  input: {
    borderWidth: 1,
    borderColor: '#3d8abe', // Color del borde
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff', // Fondo blanco para el input
    flex: 1, // Asegura que el input ocupe todo el espacio disponible
  },
  inputContainer: { // contenedores de cada Input del formulario
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff', // Color del borde
    padding: 2,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc', // Color del borde
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff', // Fondo blanco para el picker
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#ccc', // Color del borde
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff', // Fondo blanco para el date picker
  },
  dateText: {
    fontSize: 16,
    color: '#58aadc', // Color del texto de la fecha
  },
  imagePickerButton: {
    backgroundColor: '#3d8abe',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: 130,
    height: 80,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  scrollContainer: {
    padding: 16,
    flexGrow: 1,
    backgroundColor: '#3d8abe', // Mismo color que los labels
  },
  passwordContainer: {
    marginBottom: 15, // Espacio entre los elementos
  },
  showButton: {
    backgroundColor: '#55AD9B', // Color del botón
    padding: 10,
    borderRadius: 5,
  },
  hideButton: {
    backgroundColor: '#FF6B6B', // Color del botón cuando está ocultando la contraseña
    padding: 10,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  imagePickerButton: {
    flex: 1,
    backgroundColor: '#3d8abe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
};
