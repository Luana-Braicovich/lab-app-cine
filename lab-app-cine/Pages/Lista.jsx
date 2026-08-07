import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ActivityIndicator} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {SafeAreaView} from 'react-native-safe-area-context';
import { obtenerInfo } from '../Funciones/obtenerInfo';
import { useState, useEffect } from 'react';
import { Peliculas } from '../Components/Carrusel';


export default function Lista({route}) {
  const { contenido } = route.params;
  const [lista, setLista]= useState([])
  const [pagina, setPaginado]=useState(0);

  useEffect(()=>{
    obtenerInfo({nombre:'', tipo:contenido}).then((elem)=>setLista([... lista,...elem]))
  },[pagina]);

  if (!lista) {
  return null; 
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text>Lista de elem</Text>
      <FlatList
        data={lista}
        renderItem={({item})=>(
          <Peliculas origen={'Home'} pelicula={item} tipo={contenido} genero={""} /> 
        )}
        ListFooterComponent={loading}
        onEndReached={()=>{setPaginado(pagina+1)}}
        onEndReachedThreshold={0}
      />      
    </SafeAreaView>
  );
}

const loading = () => (
  <View>
    <ActivityIndicator size='large' color='#F26680'/>
  </View>
)
