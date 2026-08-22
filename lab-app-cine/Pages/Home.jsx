import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrusel from '../Components/Carrusel';
import { useState, useEffect } from 'react';
import { obtenerPeliculas } from '../Funciones/obtenerPeliculas';
import { obtenerSeries } from '../Funciones/obtenerSeries';


export default function Home() {
  const [peliculas, setPeliculas]= useState(null)
  const [series, setSeries]= useState(null)

  useEffect(()=>{
    obtenerSeries().then((serie)=>setSeries(serie))
    obtenerPeliculas().then((pelicula)=>setPeliculas(pelicula));
  },[]);

  if (!peliculas || !series) {
    return (<Text style={[styles.container,{color:'white'}]}>Ocurrio un error</Text>);
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
            <Carrusel datos= {item.datos[item.genero]} tipo={item.tipo} genero={item.genero} isPressable={true} isAlternative={item.genero==='RECOMENDADAS'}/>
          </View>
        )}
      />
    </View>
  )
}
