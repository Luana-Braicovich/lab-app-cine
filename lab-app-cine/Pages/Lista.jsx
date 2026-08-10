import { StatusBar } from 'expo-status-bar';
import { View, FlatList, ActivityIndicator} from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../Styles/stylesGeneral'
import { obtenerInfo } from '../Funciones/obtenerInfo';
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
    <View style={styles.container}>
      <StatusBar style="light" />
        <FlatList
          data={lista}
          numColumns={2}
          renderItem={({item})=>(
            <View style={styles.lista}>
              <Peliculas origen={'Home'} pelicula={item} tipo={contenido} genero={""} /> 
            </View>
          )}
          ListFooterComponent={loading}
          onEndReached={()=>{setPaginado(pagina+1)}}
          onEndReachedThreshold={0}
      />      
    </View>
  );
}

const loading = () => (
  <View>
    <ActivityIndicator size='large' color='#F26680'/>
  </View>
)
