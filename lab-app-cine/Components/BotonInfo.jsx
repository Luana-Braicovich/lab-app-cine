import { Pressable, Text, View} from "react-native"
import stylesinfo from "../Styles/stylesInfo"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const BotonInfo=({accion, texto, icon})=>{
    return(
        <Pressable
            onPress={accion}
            style={({pressed}) => [{borderRadius:15},
                {backgroundColor: pressed ? '#F26680' : '#121b24',}
            ]}>
            {({pressed}) => (
                <View style={stylesinfo.boton}>
                    <MaterialIcons name={icon} size={30} color={pressed ? 'white' : '#F26680'} />
                    <Text style={stylesinfo.textBoton}>{texto}</Text>
                </View>
            )}
        </Pressable>
    )  
}

export default BotonInfo