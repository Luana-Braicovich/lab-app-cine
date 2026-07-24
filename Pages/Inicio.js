import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { useState, useEffect } from 'react';
import background from '../assets/gradiente.jpg';
import { obtenerPeliculasPopulares, obtenerPeliculasProximas } from '../Components/obtenerPeliculas';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Inicio() {
  const [populares, setPeliculaPopular] = useState([]);
  const [proximamente, setPeliculaProxima] = useState([]);

  useEffect(()=> {
    obtenerPeliculasPopulares().then((populares)=>{
      setPeliculaPopular(populares);
    });
},[]);

useEffect(()=> {
    obtenerPeliculasProximas().then((proximamente)=>{
      setPeliculaProxima(proximamente);
    });
},[]);



  return (
    <View> 
      <StatusBar style="light" />
    <SafeAreaView style={styles.container}>

      <ImageBackground 
      style={styles.background}
      source={background}>

      <ScrollView>

      <View style={styles.margenes}>

      <Text style={styles.stars}>★★★★★</Text>
      <Text style={styles.text}>Clasifica las peliculas y series de tu interes.</Text>
      <Link screen="Home" style={styles.text}>Go to Details</Link>

      <Text style={styles.titles}>POPULAR</Text>
      <View style={styles.flexible}>
        <ScrollView horizontal={true} >
      {populares.map((pelicula)=>(
        <View key={pelicula.titulo}>
          <Image
            source={{uri:pelicula.poster}}
            style={styles.card}
          />
        </View>
      ))}
      </ScrollView>
      </View>

      <Text style={styles.titles}>PROXIMAMENTE</Text>
      <View style={styles.flexible}>
      <ScrollView horizontal={true} >
      {proximamente.map((pelicula)=>(
        <View key={pelicula.titulo}>
          <Image
            source={{uri:pelicula.poster}}
            style={styles.card}
          />
        </View>
      ))}
      </ScrollView>      
      </View>

      </View>

      </ScrollView>

      </ImageBackground>
    </SafeAreaView>
    </View>
  );
}