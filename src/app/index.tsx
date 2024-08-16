import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <Text>PowerPonto</Text>

      <Button title="Perfil" />
      
      <Button title="BATER PONTO" />

      <Button title="Inserir manualmente" />

      <Text>Developed by Felipe Larsen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainButton: {
    width: 160,
    height: 160,
    borderRadius: 9999,
    backgroundColor: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});

