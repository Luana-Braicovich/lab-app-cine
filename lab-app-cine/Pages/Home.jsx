import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrusel from '../Components/Carrusel';
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
        <Carrusel datos= {peliculas} origen='Home' tipo='pelicula' genero='RECOMENDADAS' />
        <Carrusel datos= {peliculas} origen='Home' tipo='pelicula' genero='TERROR' /> 
        <Carrusel datos= {peliculas} origen='Home' tipo='pelicula' genero='ANIMACION' />
        <Carrusel datos= {series} origen='Home' tipo='serie' genero='SERIES POPULARES' />  
      </ScrollView>
      
    </SafeAreaView>
  );
}
