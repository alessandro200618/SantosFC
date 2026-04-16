import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre - Santos FC</Text>
      <Text style={styles.text}>
        Bem-vindo ao app de transferências do Santos FC. Aqui você pode ver os
        jogadores que estão sendo contratados e acompanhar os detalhes de cada
        transferência.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});