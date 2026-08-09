import {Text, ScrollView, ImageBackground, View, Pressable, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import { useNavigation } from '@react-navigation/native';

export default function Carrusel({datos, origen, tipo, genero}){
    return (
    <View>
        {genero!='RECOMENDADAS' && (<Text style={styles.titles}>{genero}</Text>)}
        {origen==='Home'?
            <FlatList
                data={datos}
                horizontal={true}
                pagingEnabled={genero==='RECOMENDADAS'}
                renderItem={({item})=>(
                    <Peliculas origen={origen} pelicula={item} tipo={tipo} genero={genero} />
                )}
            />: 
            <ScrollView horizontal={true} pagingEnabled={genero==='RECOMENDADAS'? true:false} showsHorizontalScrollIndicator={true}>
                {datos?.map((pelicula)=>(
                    <View key={pelicula.titulo}>
                        <Peliculas origen={origen} pelicula={pelicula} tipo={tipo} genero={genero} />
                    </View>
                ))}  
            </ScrollView> 
        }   
    </View>
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

