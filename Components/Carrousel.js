import {Text,  TouchableOpacity, ScrollView, Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import obtenerElementoApi from '../Funciones/obtenerElementosApi';


export default function Carrousel ({tipo , genero}) {
    const datos= obtenerElementoApi({tipo , genero});
    return (
    <SafeAreaView>
        <Text style={styles.titles}>{genero}</Text>
        <View style={styles.flexible}>
        <ScrollView horizontal={true} >
        {datos.map((pelicula)=>(
        <View key={pelicula.titulo}>
            <Image
                source={{uri:pelicula.poster}}
                style={styles.card}
            />
        </View>
        ))}  
        </ScrollView>      
        </View>
    </SafeAreaView>
    );
};
