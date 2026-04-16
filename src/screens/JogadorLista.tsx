import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const players = [
  {
    id: '1',
    name: 'Messi',
    age: 36,
    currentTeam: 'Inter Miami',
    transferValue: '€50M',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
  },
  {
    id: '2',
    name: 'CR7',
    age: 39,
    currentTeam: 'Al Nassr',
    transferValue: '€30M',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
  },
  {
    id: '3',
    name: 'Neymar',
    age: 32,
    currentTeam: 'Al Hilal',
    transferValue: '€40M',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Neymar_Jr._with_Al-Hilal%2C_24_January_2024_-_03.jpg',
  },
  {
    id: '4',
    name: 'Robinho',
    age: 40,
    currentTeam: 'Retirado',
    transferValue: 'Gratuito',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Robinho_2011.jpg',
  },
  {
    id: '5',
    name: 'Bruno Henrique',
    age: 33,
    currentTeam: 'Flamengo',
    transferValue: '€25M',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Bruno_Henrique_2019.jpg',
  },
];

export default function PlayerListScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('PlayerDetails', { player: item })}
    >
      <Image source={{ uri: item.photo }} style={styles.photo} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogadores para Transferência - Santos FC</Text>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
});