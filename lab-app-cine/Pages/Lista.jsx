import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import { obtenerInfo } from '../Funciones/obtenerInfo';
import { useState, useEffect } from 'react';
import { Peliculas } from '../Components/Carrusel';


export default function Lista({route}) {
  const { contenido } = route.params;
  const [lista, setLista]= useState(null)
  useEffect(()=>{
    obtenerInfo({nombre:'', tipo:contenido}).then((elem)=>setLista(elem))
  },[]);

  if (!lista) {
  return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text>Lista de elem</Text>
      {lista.map((elem)=>(
        <View key={elem.titulo}>
            <Peliculas origen={'Home'} pelicula={elem} tipo={contenido} genero={""} />
        </View>
      ))}
      
    </SafeAreaView>
  );
}
