import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    lineContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
      backgroundColor: '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: '#dddddd',
    },
    line: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    status: {
      fontSize: 18,
      color: 'gray',
    },
  });

  export default styles;