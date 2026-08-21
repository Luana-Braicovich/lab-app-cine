import {Text, ScrollView, ImageBackground, View, Pressable, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import { useNavigation } from '@react-navigation/native';

export default function Carrusel({datos, genero, tipo, isPressable, isAlternative}){
    return (
    <View>
        {!isAlternative && (<Text style={styles.titles}>{genero}</Text>)}
        {isPressable?
            <FlatList
                data={datos}
                horizontal={true}
                pagingEnabled={isAlternative}
                renderItem={({item})=>(
                    <Peliculas elem={item} tipo={tipo} isPressable={isPressable} isAlternative={isAlternative} />
                )}
            />: 
            <ScrollView horizontal={true} pagingEnabled={isAlternative} showsHorizontalScrollIndicator={true}>
                {datos?.map((elem)=>(
                    <View key={elem.titulo}>
                        <Peliculas elem={elem} tipo={tipo} isPressable={isPressable} isAlternative={isAlternative}/>
                    </View>
                ))}  
            </ScrollView> 
        }   
    </View>
    );
}

export function Peliculas ({elem, tipo, isPressable, isAlternative}) {
    const {navigate} = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    return(
        <Pressable onPress={isPressable? ()=>navigate('Info', {elem, tipo}):undefined}>
            <ImageBackground
                source={isAlternative? {uri:elem.alternativo}:{uri:elem.poster}}
                style={isAlternative? [{width:windowWidth,height:300}]:styles.card}
            >
                {isAlternative && (
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={[styles.titles]}>{elem.titulo}</Text>
                    </View>
                )}
            </ImageBackground>
        </Pressable>
    )
}

