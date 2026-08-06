import { StatusBar } from 'expo-status-bar';
import { ScrollView} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrusel from '../Components/Carrusel';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import ListarInfo from '../Components/ListarInfo'
import { obtenerInfo } from '../Funciones/obtenerInfo';
import { useEffect, useState } from 'react';
import Review from '../Components/Review'
import Popup from '../Components/Popup';


export default function Info({route}) {
    const navigation = useNavigation();
    const {pelicula, tipo, newReview} = route.params;
    const [elemento, setElemento]= useState([]);
    const [actualizar,actualizarElemento]=useState(false);
    useEffect(()=>{
        obtenerInfo({nombre:pelicula.titulo, tipo}).then((informacion)=>setElemento(informacion))
    },[actualizar]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:elemento.titulo
        })
    })

    if (!elemento) {
        return null; 
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView>
        <ListarInfo datos= {elemento} tipo= {tipo}/>
        <Popup actualizar={()=> actualizarElemento(!actualizar)} datos={elemento} tipo={tipo}/>
        <Review review= {elemento.reviews}/>
        </ScrollView>
    </SafeAreaView>
    
    )
}