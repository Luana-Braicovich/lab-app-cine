import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Carrousel from '../Components/Carrousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import { obtenerElementos } from '../Funciones/obtenerElementos';
import { useState, useEffect } from 'react';


export default function Lista() {
    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text>Lista de elem</Text>
      
    </SafeAreaView>
  );
}
