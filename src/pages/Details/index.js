
import { StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Actions from '../../components/Actions';

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
        marginEnd:14,
        marginTop:14
    }
});



export default function Details({route}) {
  const {label} = route.params
  return (
    <View >
      <Text style={styles.title}>{label}</Text>
    </View>
  );
}


