import {Text, ScrollView, ImageBackground, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

export default function Carrusel({datos, origen, tipo, genero}){
    const datosGenero=datos[genero];
    return (
    <SafeAreaView>
        {genero!='RECOMENDADAS' && (<Text style={styles.titles}>{genero}</Text>)}
        <View style={styles.flexible}>
        <ScrollView horizontal={true} pagingEnabled={genero==='RECOMENDADAS'? true:false} showsHorizontalScrollIndicator={true}>
        {datosGenero?.map((pelicula)=>(
        <View key={pelicula.titulo}>
            <Peliculas origen={origen} pelicula={pelicula} tipo={tipo} genero={genero} />
        </View>
        ))}  
        </ScrollView>      
        </View>
    </SafeAreaView>
    );
}

export function Peliculas ({origen, pelicula, tipo, genero}) {
    const {navigate} = useNavigation();
    const windowWidth = Dimensions.get('window').width;
        return(
        <Pressable onPress={origen==='Home'? ()=>navigate('Info', {pelicula, tipo}):undefined}>
            <ImageBackground
                source={genero==='RECOMENDADAS'? {uri:pelicula.alternativo}:{uri:pelicula.poster}}
                style={genero==='RECOMENDADAS'? [{width:windowWidth,height:300}]:styles.card}
            >
                {genero==='RECOMENDADAS' && (
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={[styles.titles]}>{pelicula.titulo}</Text>
                    </View>
                    )
                    }
            </ImageBackground>
            
        </Pressable>
        )
    }

