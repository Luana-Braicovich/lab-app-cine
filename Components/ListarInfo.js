import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView, Image} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrousel from './Carrousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import obtenerInfoApi from '../Funciones/obtenerInfoApi';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';


const ListarInfo=({datos,tipo})=> {
    if(tipo==='serie'){
        console.log('es serie');
        return(
            <Serie datos={datos}/>
        )
    
    }else{
        console.log('es peli');
        return(
            <Pelicula datos={datos}/>
        )
        
    }
}

const Serie=({datos})=>{
    const personas=datos.cast;
    const crews=datos.crew;  
    const generos=datos.genero;
    const detalles=datos.detalles;  
    
    return (
    <SafeAreaView style={styles.container}>
        <Image
            source={{uri:datos.poster}}
            style={styles.card}
        /> 
        
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
        <Text style={styles.text}>Temporadas: {detalles.temporadas}</Text>
        <Text style={styles.text}>Capitulos: {detalles.capitulos}</Text>
        <Text style={styles.text}>'Aca iria calificacion'</Text>
    
    </SafeAreaView>
    );
}

const Pelicula=({datos})=>{
    console.log(datos);
    const personas=datos.cast;
    const crews=datos.crew;  
    const generos=datos.genero;
    const detalles=datos.detalles;  
    
    return (
    <SafeAreaView style={styles.container}>
        <Image
            source={{uri:datos.poster}}
            style={styles.card}
        /> 
        
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
        <Text style={styles.text}>{detalles.duracion}</Text>
        <Text style={styles.text}>{detalles.clasificacion}</Text>
        <Text style={styles.text}>'Aca iria calificacion'</Text>
    
    </SafeAreaView>
    );
}


export default ListarInfo