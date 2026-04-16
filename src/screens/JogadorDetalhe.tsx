import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PlayerDetailsScreen({ route, navigation, onLogout }: any) {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: player.photo }} style={styles.photo} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.detail}>Idade: {player.age}</Text>
      <Text style={styles.detail}>Time Atual: {player.currentTeam}</Text>
      <Text style={styles.detail}>Valor da Transferência: {player.transferValue}</Text>
      <Text style={styles.transferred}>Jogador transferido para o Santos FC!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PlayerList')}
        >
          <Text style={styles.buttonText}>Voltar para Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLogout()}
        >
          <Text style={styles.buttonText}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
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
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  transferred: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});