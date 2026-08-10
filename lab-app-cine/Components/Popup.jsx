import { Text, View,Pressable, Modal,TextInput} from 'react-native';
import styles from '../Styles/stylesGeneral'
import {useState} from 'react';
import stylesinfo from '../Styles/stylesInfo';
import { Item } from './Estrellas';
import { almacenarReview } from '../Funciones/almacenarReview';
import { useNavigation } from '@react-navigation/native';
import BotonInfo from './BotonInfo';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const estrellas = [
    { id: 1, title: '★'},
    { id: 2, title: '★'},
    { id: 3, title: '★'},
    { id: 4, title: '★'},
    { id: 5, title: '★'}
];

const Popup=({actualizar,datos,tipo})=>{
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [texto, cambioTexto] = useState('');
    const [rating, setRating] = useState(0);
    const titulo= datos.titulo;
    return(
        <View>
            <View style={stylesinfo.botones}>
                <BotonInfo texto={'Agregar a Lista'} icon={'playlist-add'} />
                <BotonInfo texto={'Agregar a Watchlist'} icon={'bookmark-add'} />
                <BotonInfo accion={()=>setModalVisible(true)} texto={'Agregar Review'} icon={'add-comment'} />
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={()=>setModalVisible(false)}
                animationType='slide'
            >
                <View style={stylesinfo.centrado}>
                    <View style={stylesinfo.modal}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={stylesinfo.textModal}>    Agregar Review   </Text>
                            <Pressable onPress={()=>{
                                setModalVisible(false);
                                cambioTexto('');
                                setRating(0);
                            }}>
                                {({pressed}) => (
                                    <FontAwesome name="close" size={30} color={pressed ? '#F26680' : 'black'} />)}
                            </Pressable>
                        </View>
                        <View style={styles.starsbar}>
                            {estrellas.map((item)=>(
                                <Item
                                    key={item.id}
                                    item={item}
                                    onPress={()=> setRating(item.id)}
                                    textColor={item.id<=rating ?  '#F26680' : 'black'}/>
                            ))}
                        </View>
                        <TextInput
                            style={stylesinfo.input}
                            onChangeText={cambioTexto}
                            value={texto}
                            placeholder="Ingresar Review"
                        />
                        <Pressable
                            style={({pressed}) => [
                                {backgroundColor: pressed ? '#4c565f' : '#F26680'}]}  
                            onPress={() => {
                                setModalVisible(false);
                                cambioTexto('');
                                setRating(0);
                                almacenarReview(titulo,tipo,rating,texto).then(actualizar())
                        }}> 
                            <Text style={stylesinfo.textModal}> Guardar </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )  
}

export default Popup