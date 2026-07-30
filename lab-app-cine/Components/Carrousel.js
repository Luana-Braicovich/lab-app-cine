import {Text,  TouchableOpacity, ScrollView, Image, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'
import { useNavigation } from '@react-navigation/native';
import { obtenerElementos } from '../Funciones/obtenerElementos';
import {useEffect, useState} from 'react';

export default function Carrousel ({origen, tipo , genero}) {
    const [datos, setDatos]= useState([])
    useEffect(()=>{
        const cargar = async()=>{
            const valores= await obtenerElementos({tipo , genero});
            setDatos(valores);
        }
        cargar();
    },[]);
    return(mostrarCarrousel({datos, origen, tipo, genero}));
};

function mostrarCarrousel({datos, origen,tipo, genero}){
    return (
    <SafeAreaView>
        <Text style={styles.titles}>{genero}</Text>
        <View style={styles.flexible}>
        <ScrollView horizontal={true} >
        {datos.map((pelicula)=>(
        <View key={pelicula.titulo}>
            <Peliculas origen={origen} pelicula={pelicula} tipo={tipo} />
        </View>
        ))}  
        </ScrollView>      
        </View>
    </SafeAreaView>
    );
}

function Peliculas ({origen, pelicula, tipo}) {
    const {navigate} = useNavigation();
    if(origen==='Home'){
        return(
            <Pressable onPress={()=>navigate('Info', {pelicula, tipo})}>
            <Image
                source={{uri:pelicula.poster}}
                style={styles.card}
            />
            </Pressable>
        )}else{
            return(
            <Image
                source={{uri:pelicula.poster}}
                style={styles.card}
            />
            )
        }
    }

