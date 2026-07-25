import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { useState, useEffect } from 'react';
import background from '../assets/gradiente.jpg';
//import { obtenerPeliculasPopulares, obtenerPeliculasProximas } from '../Components/obtenerPeliculas';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import Estrellas from '../Components/Estrellas';
import Carrousel from '../Components/Carrousel';

export default function Inicio() {
  



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

      <Carrousel tipo='pelicula' genero='POPULARES' />
      <Carrousel tipo='pelicula' genero='PROXIMAMENTE' />

      </View>    

      </ScrollView>

      </ImageBackground>
    </SafeAreaView>
  );
}