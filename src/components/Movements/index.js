import { View,Text,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { styles } from './style';
import {useNavigation} from '@react-navigation/native'



export default function Movements({data}) {
// let [showValue,setShowValue] = useState(false)
let [showValue,setShowValue] = useState(true)
let navigation = useNavigation()
 return (
//    <TouchableOpacity style={styles.container} onPress={()=> setShowValue(!showValue)}>
     <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Details',data)}>
        <Text style={styles.date}>{data.date}</Text>
        <View style={styles.content}>
            <Text style={styles.label}>
                {data.label}
            </Text>
            
            {showValue ? (<Text style={data.type===1? styles.value: styles.expenses}>
                {data.type==1?`R$ ${data.value}` : `R$ -${data.value}`}
            </Text>) : (<View style={styles.skeleton}/>)}
        </View>
   </TouchableOpacity>
  );
}