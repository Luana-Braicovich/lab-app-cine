import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Pressable} from 'react-native';
import { useEffect, useState, useLayoutEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { obtenerInfo } from '../Funciones/obtenerInfo';
import ListarInfo from '../Components/ListarInfo'
import Review from '../Components/Review'
import Popup from '../Components/Popup';
import BotonInfo from '../Components/BotonInfo';
import stylesinfo from '../Styles/stylesInfo';
import styles from '../Styles/stylesGeneral'

export default function Info({route}) {
    const navigation = useNavigation();
    const {elem, tipo} = route.params;
    const [elemento, setElemento]= useState([]);
    const [actualizar,actualizarElemento]=useState(false);

    useEffect(()=>{
        obtenerInfo({nombre:elem.titulo, tipo:tipo}).then((informacion)=>setElemento(informacion))
    },[actualizar]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:elemento.titulo
        })
    })

    if (elemento.length===0) {
        return (<Text style={[styles.container,{color:'white'}]}>Ocurrio un error</Text>);
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView>
        <View style={stylesinfo.info}>
            <ListarInfo datos= {elemento}/>
            <Popup actualizar={()=> actualizarElemento(!actualizar)} datos={elemento} tipo={tipo}/>

            
            <View style={stylesinfo.reviews}>
                <Text style={[stylesinfo.boton2, stylesinfo.textBoton, {fontSize:30, marginTop:20}, {backgroundColor:'#c51f5d'}]}>Últimas Reviews</Text>

                <Review review= {elemento.reviews}/>
                
                <View style={[stylesinfo.boton2, {marginBottom:20}]}> 
                    <Pressable
                        style={({pressed}) => [{borderRadius:15},
                            {backgroundColor: pressed ? '#121b24' : '#F26680'}
                    ]}>
                        {({pressed}) => (
                            <Text style={stylesinfo.textBoton}>  Ver mas  </Text>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>    
        </ScrollView>
    </SafeAreaView>
    
    )
}