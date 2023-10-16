import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '300,90',
    date: '17/09/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix João Garden',
    value: '2.500,00',
    date: '04/09/2023',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '21/09/2023',
    type: 1 // receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Ian Cunha" />

      <Balance saldo="9.950,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showVericalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
