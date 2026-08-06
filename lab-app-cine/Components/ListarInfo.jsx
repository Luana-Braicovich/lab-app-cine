import { Text, View, Image,Pressable} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import stylesinfo from '../Styles/stylesInfo';


const ListarInfo=({datos,tipo})=> {
    const detalles=datos.detalles;
    const reviews=datos.reviews;  
    if(tipo==='serie'){
        return(
            <View>
            <Principal datos={datos}/>
            <DetallesSerie detalles={detalles}/>
            <Botones datos={datos} tipo={tipo}/>
            </View>
        )
    
    }else{
        return(
            
            <View>
            <Principal datos={datos}/>
            <DetallesPelicula detalles={detalles}/>
            <Botones datos={datos} tipo={tipo}/>
            </View>
        )
        
    }
    
}

const Principal=({datos})=>{
    const personas=datos.cast;
    const crews=datos.crew;  
    const generos=datos.genero;
    const reviews=datos.reviews;  
    
    return (
    <SafeAreaView>
        <Image
            source={{uri:datos.poster}}
            style={styles.card}
        /> 
        <Calificacion reviews= {reviews}/>
        <Text style={styles.text}>{datos.titulo}</Text>
        <Text style={styles.text}>{datos.fecha_estreno}, dirigida por {datos.director}</Text>
        <Text style={styles.text}>{generos?.join(', ')},</Text>

        <Text style={styles.text}>{datos.sinopsis}</Text>

        {personas?.map((persona)=>(
            <View key={persona}>
                <Text style={styles.text}>{persona}</Text>
            </View>
        ))}
        

        <Text style={styles.text}>Productores/As: {crews?.productores}</Text>
        <Text style={styles.text}>Guionistas: {crews?.guionistas}</Text>
        <Text style={styles.text}>Director/a de fotografia: {crews?.direccion_de_fotografia}</Text>
    </SafeAreaView>
    );
}

const Botones=({datos, tipo})=>{
    return(
        <View>
            <Pressable
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#F26680' : '#121b24',}
                ]}>
                {({pressed}) => (
                    <Text style={styles.text}>Agregar a lista</Text>
                )}
            </Pressable>
            <Pressable
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#F26680' : '#121b24',}
                ]}>
                {({pressed}) => (
                    <Text style={styles.text}>Agregar a Watchlist</Text>
                )}
            </Pressable>
        </View>
    )  
}

const DetallesSerie=({detalles})=>{
    return(
        <View>
            <Text style={styles.text}>Temporadas: {detalles?.temporadas}</Text>
            <Text style={styles.text}>Capitulos: {detalles?.capitulos}</Text>
        </View>
    )  
}

const DetallesPelicula=({detalles})=>{
    return(
        <View>
            <Text style={styles.text}>{detalles?.duracion}</Text>
            <Text style={styles.text}>{detalles?.clasificacion}</Text>
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
            <Text style={styles.text}>Calificacion: {promedio} ★</Text> 
        </View>
    )  
}



export default ListarInfo