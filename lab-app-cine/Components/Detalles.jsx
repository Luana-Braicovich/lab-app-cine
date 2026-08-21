import { Text, View} from 'react-native';
import stylesinfo from '../Styles/stylesInfo';

const Detalles=({detalles})=>{
    return(
        <View>
            <Text style={stylesinfo.text}>          Duracion: {detalles?.duracion}</Text>
            <Text style={stylesinfo.text}>          Clasificacion: {detalles?.clasificacion}</Text>
            {detalles.temporadas && 
            (<View> 
            <Text style={stylesinfo.text}>          Temporadas: {detalles?.temporadas}</Text>
            <Text style={stylesinfo.text}>          Capitulos: {detalles?.capitulos}</Text>
            </View>)}
        </View>
    )  
}

export default Detalles