import {Text,  TouchableOpacity, ScrollView, Image, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import obtenerElementoApi from '../Funciones/obtenerElementosApi';
import { useNavigation } from '@react-navigation/native';

export default function Carrousel ({tipo , genero}) {
    const datos= obtenerElementoApi({tipo , genero});
    const {navigate} = useNavigation();
    return (
    <SafeAreaView>
        <Text style={styles.titles}>{genero}</Text>
        <View style={styles.flexible}>
        <ScrollView horizontal={true} >
        {datos.map((pelicula)=>(
        <View key={pelicula.titulo}>
            <Pressable onPress={()=>navigate('Info', {pelicula, tipo})}>
            <Image
                source={{uri:pelicula.poster}}
                style={styles.card}
            />
            </Pressable>
        </View>
        ))}  
        </ScrollView>      
        </View>
    </SafeAreaView>
    );
};
