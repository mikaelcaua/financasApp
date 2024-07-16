
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize:18,
      fontWeight:'bold',
      marginLeft:14,
      marginRight:14,
      marginTop:14
    },
    list:{
        marginStart:14,
        marginEnd:14
    }
});

const list = [
    {
     id:1,
     label:'Boleto Conta Luz',
     value:'300,90',
     date:'17/08/2023',
     type:0 //despesas
    },
    {
     id:2,
     label:'Pix Cliente',
     value:'2.500,00',
     date:'17/08/2023',
     type:1 //receitas/entradas
    },
]

export default function Home() {
  return (
    <View >
      <Header name = "Mikael Cauã Silva"/>
      <Balance saldo={'9550,00'} gastos={'397,00'}></Balance>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Movements data={item}/>}
      />
    </View>
  );
}


