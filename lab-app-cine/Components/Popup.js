import { Text, View,Pressable, Modal,TextInput} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Review from '../Components/Review'
import { Button } from '@react-navigation/elements';
import stylesinfo from '../Styles/stylesInfo';
import { Item } from './Estrellas';
import { almacenarElementoApi } from '../Funciones/almacenarElementoApi';
import { useNavigation } from '@react-navigation/native';



const estrellas = [
    { id: 1, title: '★'},
    { id: 2, title: '★'},
    { id: 3, title: '★'},
    { id: 4, title: '★'},
    { id: 5, title: '★'},
];

const Popup=({actualizar,datos,tipo})=>{
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [texto, cambioTexto] = useState('');
    const [rating, setRating] = useState(0);
    const titulo= datos.titulo;
    return(
        <View>
            <Pressable
                onPress={()=>setModalVisible(true)}
                style={({pressed}) => [
                    {backgroundColor: pressed ? '#F26680' : '#121b24',}
                ]}>
                <Text style={styles.text}>Agregar Review</Text>
            </Pressable>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={()=>setModalVisible(false)}
                animationType='slide'
            >
                <View style={stylesinfo.centrado}>
                    <View style={stylesinfo.modal}>
                        <Text style={styles.text}>Agregar Review</Text>
                        <View style={styles.starsbar}>
                                {estrellas.map((item)=>(
                                    <Item
                                    key={item.id}
                                    item={item}
                                    onPress={()=> setRating(item.id)}
                                    textColor={item.id<=rating ?  '#F26680' : 'white'}
                                    />
                                    
                                ))}
                        </View>
                        <TextInput
                            style={stylesinfo.input}
                            onChangeText={cambioTexto}
                            value={texto}
                            placeholder="ingresar Review"
                        />
                        <Pressable
                        style={({pressed}) => [
                        {backgroundColor: pressed ? '#F26680' : '#d1d1d1',}
                        ]}  
                        onPress={() => {setModalVisible(false);
                                        cambioTexto('');
                                        setRating(0);
                                        almacenarElementoApi(titulo,tipo,rating,texto).then(actualizar())
                                        }}> 
                        <Text style={styles.text}>Guardar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )  
}

export default Popup