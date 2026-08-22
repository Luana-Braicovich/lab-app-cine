import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, TextInput, FlatList} from 'react-native';
import styles from '../Styles/stylesGeneral'
import { obtenerInfo } from '../Funciones/obtenerInfo';
import { useState, useEffect } from 'react';
import Posters from '../Components/Posters';


export default function Busqueda({route}) {
    const {contenido} = route.params;
    const [data, setData]= useState([]);
    const [texto, cambioTexto] = useState('');
    const [lista, setLista]= useState([]);
    const windowWidth = Dimensions.get('window').width;

    useEffect(()=>{
        obtenerInfo({nombre: '', tipo:contenido}).then((elem)=>setData(elem))
    },[]);
    
    useEffect(()=>{
        let categoria=[]
        data?.map((item)=>{
            let titulo=item.titulo.trim().toUpperCase()
            if(titulo.includes(texto.toUpperCase().trim())){
                categoria.push(item);
            }
        })
        setLista(categoria);
    },[texto]);

    return (
        <View style={styles.container}>
        <StatusBar style="light" />
        <TextInput
            style={[{width:windowWidth, marginBottom:10},styles.input]}
            onChangeText={cambioTexto}
            value={texto}
            placeholder={"Buscar ",contenido}
        />
        <FlatList
            data={lista}
            numColumns={2}
            renderItem={({item})=>(
            <View style={styles.lista}>
                <Posters elem={item} tipo={contenido} genero={""} isPressable={true} isAlternative={false} />
            </View>
            )}
        />      

        </View>
    );
}