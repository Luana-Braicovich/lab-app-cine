import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrousel from '../Components/Carrousel';
import {SafeAreaView} from 'react-native-safe-area-context';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
      <Carrousel origen='Home' tipo='pelicula' genero='TERROR' />
      <Carrousel origen='Home' tipo='pelicula' genero='ANIMACION' />
      <Carrousel origen='Home' tipo='pelicula' genero='RECOMENDADAS' />
      <Carrousel origen='Home' tipo='serie' genero='SERIES POPULARES' />
      </ScrollView>
      
    </SafeAreaView>
  );
}
