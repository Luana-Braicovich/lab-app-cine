import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../Styles/stylesGeneral'


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Peliculas de misterio</Text>
      <StatusBar style="light" />
    </View>
  );
}
