import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { useEffect, useState, useLayoutEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { obtenerInfo } from '../Funciones/obtenerInfo';
import ListarInfo from '../Components/ListarInfo'
import Review from '../Components/Review'
import Popup from '../Components/Popup';
import BotonInfo from '../Components/BotonInfo';
import stylesinfo from '../Styles/stylesInfo';
import styles from '../Styles/stylesGeneral'

export default function Info({route}) {
    const navigation = useNavigation();
    const {pelicula, tipo} = route.params;
    const [elemento, setElemento]= useState([]);
    const [actualizar,actualizarElemento]=useState(false);
    useEffect(()=>{
        obtenerInfo({nombre:pelicula.titulo, tipo}).then((informacion)=>setElemento(informacion))
        console.log(elemento);
    },[actualizar]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:elemento.titulo
        })
    })

    if (elemento.length===0) {
        return null; 
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView>
        <View style={stylesinfo.info}>
            <ListarInfo datos= {elemento}/>
            <Popup actualizar={()=> actualizarElemento(!actualizar)} datos={elemento} tipo={tipo}/>
            <Review review= {elemento.reviews}/>
        </View>    
        </ScrollView>
    </SafeAreaView>
    
    )
}