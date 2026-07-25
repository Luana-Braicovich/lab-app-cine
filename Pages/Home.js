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
      <Carrousel tipo='POPULARES' />
      <Carrousel tipo='TERROR' />
      <Carrousel tipo='ACCION' />
      <Carrousel tipo='ROMANCE' />
      <Carrousel tipo='ANIMACION' />
      <Carrousel tipo='RECOMENDADAS' />
      </ScrollView>
      
    </SafeAreaView>
  );
}
