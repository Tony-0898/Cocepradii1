export const LoginScreenStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  formContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  adminFormContainer: {
    backgroundColor: 'rgba(255, 69, 0, 0.7)', // Fondo naranja para administrador
  },
  tecnicoFormContainer: {
    backgroundColor: 'rgba(0, 128, 0, 0.7)', // Fondo verde para técnico
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  adminButton: {
    flex: 1,
    backgroundColor: '#FF4500', // Color naranja para el botón de administrador
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,  // Separación entre los botones
    justifyContent: 'center',
    alignItems: 'center',
  },
  tecnicoButton: {
    flex: 1,
    backgroundColor: '#228B22', // Color verde para el botón de técnico
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,  // Separación entre los botones
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
