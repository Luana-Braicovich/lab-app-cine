import { Text, View, Image} from 'react-native';
import stylesinfo from '../Styles/stylesInfo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Review=({review})=> {
    if(review?.length>0){

    return(
        <View style={stylesinfo.reviews}>
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
            
        </View>
    )  
    }
}

export default Review