import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import background from '../assets/gradiente.jpg';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import Estrellas from '../Components/Estrellas';
import Carrusel from '../Components/Carrusel';
import { obtenerPeliculas } from '../Funciones/obtenerPeliculas';

export default function Inicio() {
  const [peliculas, setPeliculas]= useState([])
  useEffect(()=>{
    obtenerPeliculas().then((pelicula)=>setPeliculas(pelicula))
  },[]);

  if(peliculas.length===0){
    return (<Text style={[styles.container,{color:'white'}]}>Ocurrio un error</Text>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground 
      style={styles.background}
      source={background}>
      <ScrollView>
      <View style={styles.margenes}>

        <Estrellas />
        <Text style={styles.text}>Clasifica las peliculas y series de tu interes.</Text>
        <Link screen="HomeTabs" style={styles.boton}>Comienza</Link>

        <Carrusel datos= {peliculas['POPULARES']} tipo='pelicula' genero='POPULARES' isPressable={false} isAlternative={false}/>
        <Carrusel datos= {peliculas['PROXIMAMENTE']} tipo='pelicula' genero='PROXIMAMENTE' isPressable={false} isAlternative={false}/>

      </View>    
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}