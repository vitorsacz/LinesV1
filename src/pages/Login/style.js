import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  loginTexto: {
    fontSize: 40,
    color: '#013eb0',
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#e6e6e6',
    width: '80%',
    textAlign: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#013eb0',
    width: '30%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cadastroContainer: {
    marginTop: 20,
  },
  cadastroTexto: {
    color: '#013eb0',
    fontSize: 16
  },
  esqueceuSenha:{
    color: '#013eb0',
    fontSize: 16,
    marginBottom:150
  }
});

export default styles;
