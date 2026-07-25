import {Text,  TouchableOpacity, ScrollView, Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import movies from '../api/movies.json';

export default function Carrousel ({tipo}) {
  return (
    <SafeAreaView>
        <Text style={styles.titles}>{tipo}</Text>
        <View style={styles.flexible}>
        <ScrollView horizontal={true} >
        {movies[tipo].map((pelicula)=>(
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

