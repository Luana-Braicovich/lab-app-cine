import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import background from '../assets/gradiente.jpg';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import Estrellas from '../Components/Estrellas';
import Carrousel from '../Components/Carrousel';
import { obtenerElementos } from '../Funciones/obtenerElementos';

export default function Inicio() {
  const [peliculas, setPeliculas]= useState([])
  useEffect(()=>{
    obtenerElementos('pelicula').then((pelicula)=>setPeliculas(pelicula))
  },[]);

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
      
      <Link screen="Home" style={styles.boton}>Comienza</Link>

      <Carrousel datos= {peliculas} origen='inicio' tipo='pelicula' genero='POPULARES' />
      <Carrousel datos= {peliculas} origen='inicio' tipo='pelicula' genero='PROXIMAMENTE'/>

      </View>    

      </ScrollView>

      </ImageBackground>
    </SafeAreaView>
  );
}