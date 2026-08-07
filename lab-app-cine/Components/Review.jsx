import { Text, View, Image, Pressable} from 'react-native';
import stylesinfo from '../Styles/stylesInfo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Review=({review})=> {
    if(review?.length>0){

    return(
        <View style={stylesinfo.reviews}>
            <Text style={[stylesinfo.boton2, stylesinfo.textBoton, {fontSize:30, marginTop:20}, {backgroundColor:'#c51f5d'}]}>Últimas Reviews</Text>
            {review.map((item,index)=>(
            <View key={index} style={stylesinfo.box}> 
                <View style={stylesinfo.headerReviews}> 
                    <FontAwesome5 name="user-circle" size={24} color="white" />
                    <View> 
                        <Text style={stylesinfo.titles}>{item.usuario}</Text>
                        <Text style={stylesinfo.titles}>Calificacion: {item.calificacion} ★</Text>
                    </View>
                </View>
                <Text style={stylesinfo.titles}>{item.fecha? item.fecha:'22/7/26'}</Text>
                <Text style={stylesinfo.text}>{item.comentario}</Text>
            </View>
            ))}
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
    )  
    }
}

export default Review