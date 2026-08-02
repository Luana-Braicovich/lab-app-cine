import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrousel from '../Components/Carrousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import { obtenerElementos } from '../Funciones/obtenerElementos';
import { useState, useEffect } from 'react';


export default function Home() {
    const [peliculas, setPeliculas]= useState(null)
    const [series, setSeries]= useState(null)
    useEffect(()=>{
      obtenerElementos('pelicula').then((pelicula)=>setPeliculas(pelicula))
      obtenerElementos('serie').then((serie)=>setSeries(serie))
    },[]);
  if (!peliculas || !series) {
  return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Carrousel datos= {peliculas} origen='Home' tipo='pelicula' genero='TERROR' />
        <Carrousel datos= {peliculas} origen='Home' tipo='pelicula' genero='ANIMACION' />
        <Carrousel datos= {peliculas} origen='Home' tipo='pelicula' genero='RECOMENDADAS' />
        <Carrousel datos= {series} origen='Home' tipo='serie' genero='SERIES POPULARES' />        
      </ScrollView>
      
    </SafeAreaView>
  );
}
