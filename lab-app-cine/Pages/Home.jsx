import { StatusBar } from 'expo-status-bar';
import { View, FlatList} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrusel from '../Components/Carrusel';
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

  return(
    <View style= {styles.container}>
      <StatusBar style='light'/>
      <FlatList
        data={[
          {tipo:'pelicula', datos:peliculas, genero:'RECOMENDADAS'},
          {tipo:'pelicula', datos:peliculas, genero:'TERROR'},
          {tipo:'pelicula', datos:peliculas, genero:'ANIMACION'},
          {tipo:'pelicula', datos:peliculas, genero:'ROMANCE'},
          {tipo:'serie', datos:series, genero:'SERIES POPULARES'}
        ]}
        renderItem={({item})=>(
          <View>
            <Carrusel datos= {item.datos[item.genero]} origen='Home' tipo={item.tipo} genero={item.genero} />
          </View>
        )}
      />
    </View>
  )
}
