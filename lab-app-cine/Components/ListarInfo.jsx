import { Text, View, Image,Pressable} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import stylesinfo from '../Styles/stylesInfo';
import {Dimensions} from 'react-native';



const ListarInfo=({datos})=> {
    const detalles=datos.detalles;
    const personas=datos.cast;
    const crews=datos.crew;  
    const generos=datos.genero;
    const reviews=datos.reviews;  
    const windowWidth = (Dimensions.get('window').width)/2;
    
    return (
    <View style={[stylesinfo.info]}>
        <View style={stylesinfo.principal}>
            <View>
                <Image
                    source={{uri:datos.poster}}
                    style={stylesinfo.card}
                /> 
                <Calificacion reviews= {reviews}/>
            </View>
            <View style={{width:windowWidth}}>
                <Text style={[stylesinfo.titles, {fontSize:30}]}>{datos.titulo}</Text>
                <Text style={stylesinfo.text}>
                    {datos.fecha_estreno}
                    {datos.director?', dirigida por ':', creada por '}
                </Text>
                <Text style={stylesinfo.titles}>{datos.director?datos.director:datos.creador}</Text>
            </View>
        </View>

        <View style={stylesinfo.box}>
            <Text style={stylesinfo.titles}>Sinopsis:</Text>
            <Text style={stylesinfo.text}>{datos.sinopsis}</Text>

            <Text style={stylesinfo.titles}>Generos:</Text>
            <Text style={stylesinfo.text}>{generos?.join(', ')}</Text>

            <Text style={stylesinfo.titles}>Cast:</Text>
            {personas?.map((persona)=>(
                <View key={persona}>
                    <Text style={stylesinfo.text}>          {persona}</Text>
                </View>
            ))}
            
            <Text style={stylesinfo.titles}>Crew:</Text>
            <Text style={stylesinfo.text}>          Productores/As: {crews?.productores}</Text>
            <Text style={stylesinfo.text}>          Guionistas: {crews?.guionistas}</Text>
            <Text style={stylesinfo.text}>          Director/a de fotografia: {crews?.direccion_de_fotografia}</Text>

            <Text style={stylesinfo.titles}>Detalles:</Text>
            <Detalles detalles={detalles}/>
        </View>
    </View>
    );
}

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

const Calificacion=({reviews})=>{
    let calificacionTotal=0;
    let cantidad=0;
    reviews?.map((item)=>{
        calificacionTotal= calificacionTotal + item.calificacion;
        cantidad=cantidad+1;
    })
    let promedio=0;
    if (cantidad > 0) { promedio = Math.round(calificacionTotal / cantidad) }

    return(
        <View>
            <Text style={stylesinfo.titles}>Calificacion: {promedio} ★</Text> 
        </View>
    )  
}



export default ListarInfo