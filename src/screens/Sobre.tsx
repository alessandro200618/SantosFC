import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre - Santos FC</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📱 Sobre o App</Text>
        <Text style={styles.text}>
          Bem-vindo ao app de gestão de jogadores do Santos FC. Aqui você pode visualizar 
          todos os nossos atletas, acompanhar seus detalhes e estatísticas de forma prática 
          e organizada.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚽ Sobre o Santos FC</Text>
        <Text style={styles.text}>
          O Santos Football Club é um clube de futebol brasileiro fundado em 1912, 
          localizado em Santos, São Paulo. É um dos times mais tradicionais do Brasil 
          e conhecido mundialmente por suas conquistas e pela revelação de grandes talentos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏆 Histórico de Vitórias</Text>
        <Text style={styles.text}>
          • Campeão da Libertadores: 3 títulos (1962, 1963, 2011){'\n'}
          • Campeão da Copa do Brasil: 22 títulos{'\n'}
          • Campeão Paulista: Mais de 22 títulos{'\n'}
          • Campeão Mundial: 1962, 1963
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⭐ Grandes Ídolos</Text>
        <Text style={styles.text}>
          O Santos é conhecido por revelar grandes talentos, como:{'\n'}
          • Pelé - Maior ídolo do clube e considerado um dos melhores jogadores de todos os tempos{'\n'}
          • Neymar - Um dos talentos mais promissores do futebol moderno{'\n'}
          • Robinho - Destaque da nova geração{'\n'}
          • Diego - Volante consagrado
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Funcionalidades do App</Text>
        <Text style={styles.text}>
          ✓ Visualizar lista completa de jogadores{'\n'}
          ✓ Acompanhar detalhes e estatísticas de cada atleta{'\n'}
          ✓ Sistema de cadastro seguro{'\n'}
          ✓ Autenticação de usuários{'\n'}
          ✓ Interface amigável e intuitiva
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📧 Contato</Text>
        <Text style={styles.text}>
          Email: contato@santosfc.com.br{'\n'}
          Site: www.santosfc.com.br{'\n'}
          Redes Sociais: @SantosFC
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});