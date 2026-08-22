import {Text, ImageBackground, View, Pressable, Dimensions} from 'react-native';
import styles from '../Styles/stylesGeneral'
import { useNavigation } from '@react-navigation/native';

const Posters =({elem, tipo, isPressable, isAlternative}) =>{
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

export default Posters;