import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const players = [
  {
    id: '1',
    name: 'Messi',
    age: 36,
    currentTeam: 'Inter Miami',
    transferValue: '€50M',
    photo: 'https://i.pinimg.com/736x/23/61/5c/23615ce774a4264fc334b1a5cd422de4.jpg',
  },
  {
    id: '2',
    name: 'CR7',
    age: 39,
    currentTeam: 'Real madrid',
    transferValue: '€30M',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKE_mzwKQLgu5Qh4vNDvgDGAQaR9IoMLDOA&s',
  },
  {
    id: '3',
    name: 'Neymar, Melhor do Mundo ​​✋🤪🤚​​',
    age: 32,
    currentTeam: 'Aposentadoria',
    transferValue: ' ∞',
    photo: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/santos-neymar_ce226e-e1738361128243.jpg?w=1200&h=1200&crop=1',
  },
  {
    id: '4',
    name: 'Robinho',
    age: 40,
    currentTeam: 'Preso',
    transferValue: 'Gratuito',
    photo: 'https://www.estadao.com.br/resizer/v2/W35TVWYC75FABIIPNB6WSEOCIU.jpg?quality=80&auth=e62aa3662d3ef12332ced0df71125188ecbf834bf10f9cc0e5e3715aafeea277&width=1200',
  },
  {
    id: '5',
    name: 'Caça-Rato',
    age: 33,
    currentTeam: 'Palmolengo',
    transferValue: '€25M',
    photo: 'https://jpimg.com.br/uploads/2017/04/1597285979-caca-rato-comemora-gol-diante-da-portuguesa-no-caninde.jpg',
  },
  {
    id: '6',
    name: 'Uno-Henrique',
    age: 999,
    currentTeam: 'Fernandópolis',
    transferValue: '€255555555M',
    photo: 'data:image/jpeg;base64,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',
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