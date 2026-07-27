import { Text, View, Image, TouchableOpacity,Pressable, Modal} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Review from '../Components/Review'
import { Button } from '@react-navigation/elements';
import Estrellas from './Estrellas';
import stylesinfo from '../Styles/stylesInfo';

const ListarInfo=({datos,tipo})=> {
    const detalles=datos.detalles;
    console.log({detalles})
    const reviews=datos.reviews;  
    if(tipo==='serie'){
        return(
            <View>
            <Principal datos={datos}/>
            <DetallesSerie detalles={detalles}/>
            <Botones/>
            <Review review= {reviews}/>
            </View>
        )
    
    }else{
        return(
            
            <View>
            <Principal datos={datos}/>
            <DetallesPelicula detalles={detalles}/>
            <Botones/>
            <Review review= {reviews}/>
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
        <Text style={styles.text}>{generos.join(', ')},</Text>

        <Text style={styles.text}>{datos.sinopsis}</Text>

        {personas.map((persona)=>(
            <View key={persona}>
                <Text style={styles.text}>{persona}</Text>
            </View>
        ))}
        

        <Text style={styles.text}>Productores/As: {crews.productores}</Text>
        <Text style={styles.text}>Guionistas: {crews.guionistas}</Text>
        <Text style={styles.text}>Director/a de fotografia: {crews.direccion_de_fotografia}</Text>
    </SafeAreaView>
    );
}

const Botones=()=>{
    const [modalVisible, setModalVisible] = useState(false);
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
            <Pressable
                onPress={()=>setModalVisible(true)}
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#F26680' : '#121b24',}
                ]}>
                <Text style={styles.text}>Agregar Review</Text>
            </Pressable>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={()=>setModalVisible(false)}
                animationType='slide'
                //presentationStyle='pageSheet'
            >
                <View style={stylesinfo.centrado}>
                    <View style={stylesinfo.modal}>
                        <Text style={styles.text}>Agregar Review</Text>
                        <Pressable
                        style={({pressed}) => [
                        {backgroundColor: pressed ? '#F26680' : '#d1d1d1',}
                        ]}  
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.text}>Guardaar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )  
}

const DetallesSerie=({detalles})=>{
    return(
        <View>
            <Text style={styles.text}>Temporadas: {detalles.temporadas}</Text>
            <Text style={styles.text}>Capitulos: {detalles.capitulos}</Text>
        </View>
    )  
}

const DetallesPelicula=({detalles})=>{
    console.log({detalles})
    return(
        <View>
            <Text style={styles.text}>{detalles.duracion}</Text>
            <Text style={styles.text}>{detalles.clasificacion}</Text>
        </View>
    )  
}

const Calificacion=({reviews})=>{
    let calificacionTotal=0;
    let cantidad=0;
    reviews.map((item)=>{
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