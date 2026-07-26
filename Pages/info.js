import { StatusBar } from 'expo-status-bar';
import { ScrollView} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrousel from '../Components/Carrousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import obtenerInfoApi from '../Funciones/obtenerInfoApi';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import ListarInfo from '../Components/ListarInfo'


export default function Info({route}) {
    const navigation = useNavigation();
    const {pelicula, tipo} = route.params;
    const elemento= obtenerInfoApi({nombre:pelicula.titulo , tipo});
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:elemento.titulo
        })
    })

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView>
        <ListarInfo datos= {elemento} tipo= {tipo}/>
        </ScrollView>
    </SafeAreaView>
    
    )
}